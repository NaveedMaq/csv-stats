import fs from 'fs';
import { OutputTarget } from '../ReportGenerator';

export class HtmlReport implements OutputTarget {
  constructor(public reportName: string) {}

  print(report: string): void {
    const html = `
      <div>
        <h1>Analysis Output</h1>
        <div>${report}</div>
      </div>
    `;

    if (!fs.existsSync('reports')) {
      fs.mkdirSync('reports');
    }
    fs.writeFileSync(`reports/${this.reportName}.html`, html);
  }
}
