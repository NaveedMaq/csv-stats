import { MatchReader } from './MatchReader';
import { ReportGenerator } from './ReportGenerator';

const matchReader = MatchReader.fromCsv('football.csv');
const winsReportGenerator = ReportGenerator.winsAnalysisHtml(
  'Man United',
  'Man United Wins'
);

matchReader.load();
winsReportGenerator.buildAndPrintReport(matchReader.matches);

const avgGoalsAnalysisConsole =
  ReportGenerator.avgGoalsAnalysisConsole('Man United');
avgGoalsAnalysisConsole.buildAndPrintReport(matchReader.matches);
