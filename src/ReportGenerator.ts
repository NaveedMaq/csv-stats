import { MatchData } from './MatchData';
import { AverageGoalsAnalysis } from './analyzers/AverageGoalsAnalysis';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class ReportGenerator {
  static winsAnalysisHtml(team: string, reportPath: string): ReportGenerator {
    return new ReportGenerator(
      new WinsAnalysis(team),
      new HtmlReport(reportPath)
    );
  }

  static avgGoalsAnalysisConsole(team: string): ReportGenerator {
    return new ReportGenerator(
      new AverageGoalsAnalysis(team),
      new ConsoleReport()
    );
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }
}
