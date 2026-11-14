import React, { useState } from "react";

const fmt = (ms) => (ms < 1000 ? `${Math.round(ms)} ms` : `${(ms / 1000).toFixed(2)} s`);

const CONTROLS = [
  { key: "prompt", label: "Prompt tokens", min: 200, max: 8000, step: 100, unit: "" },
  { key: "cached", label: "Prefix served from cache", min: 0, max: 90, step: 5, unit: "%" },
  { key: "output", label: "Output tokens", min: 50, max: 1000, step: 10, unit: "" },
  { key: "prefill", label: "Prefill speed", min: 500, max: 10000, step: 100, unit: " tok/s" },
  { key: "decode", label: "Decode speed", min: 10, max: 200, step: 2, unit: " tok/s" },
];

// A deliberately small model of one LLM request:
//   TTFT  = uncached prompt tokens / prefill speed
//   total = TTFT + output tokens / decode speed
export default function LatencyBudget() {
  const [v, setV] = useState({ prompt: 2000, cached: 0, output: 300, prefill: 2500, decode: 40 });

  const uncached = v.prompt * (1 - v.cached / 100);
  const ttft = (uncached / v.prefill) * 1000;
  const decode = (v.output / v.decode) * 1000;
  const total = ttft + decode;
  const prefillShare = (ttft / total) * 100;

  let takeaway;
  if (prefillShare >= 35) {
    takeaway = "The prompt is the bottleneck. Cache the shared prefix or trim the context.";
  } else if (prefillShare <= 8) {
    takeaway = "Decode dominates. Output length and tokens per second are the levers.";
  } else {
    takeaway = "A mixed budget. Streaming hides the decode time; nothing hides a slow first token.";
  }

  return (
    <div className="budget">
      <div className="budget-head">
        <p className="eyebrow">Latency budget</p>
        <h3>Move a slider, watch the request.</h3>
      </div>

      <div className="budget-readout">
        <div>
          <span>Time to first token</span>
          <strong>{fmt(ttft)}</strong>
        </div>
        <div>
          <span>Total</span>
          <strong>{fmt(total)}</strong>
        </div>
      </div>

      <div
        className="budget-bar"
        role="img"
        aria-label={`Prefill ${fmt(ttft)}, decode ${fmt(decode)}`}
      >
        <span className="bar-prefill" style={{ width: `${prefillShare}%` }} />
        <span className="bar-decode" style={{ width: `${100 - prefillShare}%` }} />
      </div>
      <div className="budget-legend">
        <span>
          <i className="bar-prefill" /> Prefill {fmt(ttft)}
        </span>
        <span>
          <i className="bar-decode" /> Decode {fmt(decode)}
        </span>
      </div>

      <p className="budget-takeaway">{takeaway}</p>

      <div className="budget-controls">
        {CONTROLS.map((c) => (
          <label key={c.key}>
            <span>
              {c.label}
              <b>
                {v[c.key].toLocaleString()}
                {c.unit}
              </b>
            </span>
            <input
              type="range"
              min={c.min}
              max={c.max}
              step={c.step}
              value={v[c.key]}
              onChange={(e) => setV({ ...v, [c.key]: Number(e.target.value) })}
            />
          </label>
        ))}
      </div>

      <p className="budget-note">
        A toy model: it ignores queueing, batching and the network. The numbers are yours to set,
        not benchmarks.
      </p>
    </div>
  );
}
