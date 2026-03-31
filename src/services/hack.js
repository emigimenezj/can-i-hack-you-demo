import { execSync } from "node:child_process";

export function run(vector) {
  let sessionID = null;

  try {
    sessionID = execSync("git config --local --get can-i-hack-you.session")
      .toString()
      .trim();
  } catch {}
  fetch("http://localhost:3001/collect", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      vector,
      sessionID,
      timestamp: new Date().toISOString(),
    }),
  }).catch((err) => {
    console.error("Failed to send attack data", err);
  });
}
