import { MatchData } from '../MatchData';
import { Analyzer } from '../ReportGenerator';

export class AverageGoalsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let goals = 0;
    let matchesPlayed = 0;

    for (let match of matches) {
      if (match[1] === this.team) {
        goals += match[3];
        matchesPlayed++;
      } else if (match[2] === this.team) {
        goals += match[4];
        matchesPlayed++;
      }
    }
    const averageGoals = goals / matchesPlayed;

    return `Team ${this.team} scored an average of  ${averageGoals.toFixed(
      1
    )} goals per match`;
  }
}
