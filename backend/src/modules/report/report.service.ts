import { AnalysisResult } from "../analysis/analysis.prompts";

export function generatePdfReportHtml(analysis: AnalysisResult): string {
  const scoreColor = analysis.overallScore >= 85 ? "#22C55E" : analysis.overallScore >= 70 ? "#F59E0B" : "#EF4444";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ResumeCheck Report — ${analysis.filename}</title>
  <style>
    body { font-family: 'Helvetica Neue', Arial, sans-serif; background: #0F0F1A; color: #FFFFFF; padding: 40px; line-height: 1.6; }
    .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(108,99,255,0.3); padding-bottom: 20px; margin-bottom: 30px; }
    .brand { font-size: 24px; font-weight: 800; color: #6C63FF; }
    .score-card { background: #1A1A2E; border: 1px solid rgba(108,99,255,0.3); border-radius: 16px; padding: 30px; margin-bottom: 30px; display: flex; gap: 30px; align-items: center; }
    .score-circle { width: 100px; height: 100px; border-radius: 50%; background: ${scoreColor}22; border: 4px solid ${scoreColor}; display: flex; align-items: center; justify-content: center; font-size: 36px; font-weight: 800; color: ${scoreColor}; }
    .section-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px; }
    .card { background: #1A1A2E; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 20px; }
    h2 { font-size: 18px; color: #8B85FF; margin-top: 0; }
    .item { margin-bottom: 10px; font-size: 14px; }
    .badge { display: inline-block; padding: 3px 8px; border-radius: 4px; font-size: 11px; font-weight: 700; margin-right: 8px; }
    .high { background: rgba(239,68,68,0.2); color: #f87171; }
    .medium { background: rgba(245,158,11,0.2); color: #fbbf24; }
    .low { background: rgba(108,99,255,0.2); color: #a78bfa; }
  </style>
</head>
<body>
  <div class="header">
    <div class="brand">📄 ResumeCheck Analysis Report</div>
    <div style="color: #9CA3AF; font-size: 13px;">${analysis.filename} • ${analysis.analyzedAt}</div>
  </div>

  <div class="score-card">
    <div class="score-circle">${analysis.overallScore}</div>
    <div>
      <h1 style="margin: 0; font-size: 24px;">Overall Score: ${analysis.overallScore}/100</h1>
      <p style="margin: 5px 0 0; color: #9CA3AF;">ATS Compatibility: <strong style="color: #22C55E">${analysis.atsScore}%</strong> | Tone: <strong>${analysis.tone}</strong></p>
    </div>
  </div>

  <div class="section-grid">
    <div class="card">
      <h2>✅ Key Strengths</h2>
      ${analysis.strengths.map(s => `<div class="item">✓ ${s}</div>`).join("")}
    </div>
    <div class="card">
      <h2>🔧 Recommended Improvements</h2>
      ${analysis.improvements.map(i => `<div class="item"><span class="badge ${i.priority}">${i.priority.toUpperCase()}</span> ${i.text}</div>`).join("")}
    </div>
  </div>

  <div class="card">
    <h2>🎯 ATS Checklist Result (${analysis.atsChecklist.filter(x => x.pass).length}/${analysis.atsChecklist.length} Passed)</h2>
    ${analysis.atsChecklist.map(c => `<div class="item" style="color: ${c.pass ? '#22C55E' : '#EF4444'}">${c.pass ? '✓' : '✕'} ${c.item}</div>`).join("")}
  </div>
</body>
</html>
  `;
}
