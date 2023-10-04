import { OutputTarget } from '../ReportGenerator';

export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
