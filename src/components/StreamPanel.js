import React, { useEffect, useMemo, useState } from "react";
import { stream } from "../data/content";
import { prefersReducedMotion } from "../hooks";

// Splits text into short chunks so the stream looks like tokens, not words.
const toTokens = (text) => text.match(/\s*\S{1,5}/g) || [];

const TOKEN_INTERVAL_MS = 26;

// A simulated chat-completion stream. The timings shown are measured from the
// animation itself, so the readout matches what the visitor just watched.
export default function StreamPanel() {
  const [index, setIndex] = useState(0);
  const [run, setRun] = useState(0);
  const [count, setCount] = useState(0);
  const [stats, setStats] = useState({ ttft: null, tps: null });

  const tokens = useMemo(() => toTokens(stream[index].a), [index]);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setCount(tokens.length);
      setStats({ ttft: null, tps: null });
      return undefined;
    }

    setCount(0);
    setStats({ ttft: null, tps: null });

    const sentAt = performance.now();
    let firstTokenAt = 0;
    let emitted = 0;
    let interval;

    const wait = setTimeout(() => {
      firstTokenAt = performance.now();
      setStats({ ttft: Math.round(firstTokenAt - sentAt), tps: null });
      interval = setInterval(() => {
        emitted += 1;
        setCount(emitted);
        if (emitted >= tokens.length) {
          clearInterval(interval);
          const seconds = (performance.now() - firstTokenAt) / 1000;
          setStats((s) => ({ ...s, tps: (emitted / seconds).toFixed(1) }));
        }
      }, TOKEN_INTERVAL_MS);
    }, 180 + Math.random() * 160);

    return () => {
      clearTimeout(wait);
      clearInterval(interval);
    };
  }, [tokens, run]);

  const done = count >= tokens.length;
  const ask = (i) => {
    setIndex(i);
    setRun((r) => r + 1);
  };

  return (
    <div className="stream" aria-label="Simulated model response about Yash">
      <div className="stream-bar">POST /v1/chat/completions</div>

      <div className="stream-body">
        <p className="stream-prompt">
          <span>&gt; {stream[index].q}</span>
          <span className={`stream-state ${done ? "" : "is-live"}`}>
            <i aria-hidden="true" />
            {done ? "complete" : "streaming"}
          </span>
        </p>
        <p className="stream-answer">
          {tokens.slice(0, count).join("")}
          {!done && <span className="stream-caret" aria-hidden="true" />}
        </p>
      </div>

      <dl className="stream-stats">
        <div>
          <dt>ttft</dt>
          <dd>{stats.ttft !== null ? `${stats.ttft} ms` : "–"}</dd>
        </div>
        <div>
          <dt>speed</dt>
          <dd>{stats.tps !== null ? `${stats.tps} tok/s` : "–"}</dd>
        </div>
        <div>
          <dt>tokens</dt>
          <dd>{count}</dd>
        </div>
      </dl>

      <div className="stream-asks">
        {stream.map((item, i) => (
          <button
            key={item.q}
            type="button"
            className={i === index ? "is-active" : ""}
            onClick={() => ask(i)}
          >
            {item.q}
          </button>
        ))}
      </div>
    </div>
  );
}
