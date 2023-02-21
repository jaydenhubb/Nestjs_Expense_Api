export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}
export const data: Data = {
  report: [
    {
      id: 'uuid1',
      source: 'Salary',
      amount: 7900,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'uuid2',
      source: 'Novels',
      amount: 1100,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
    {
      id: 'uuid3',
      source: 'Lottery',
      amount: 900,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'uuid4',
      source: 'Food',
      amount: 300,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
  ],
};
interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    updated_at: Date;
    type: ReportType;
  }[];
}
data.report.push({
  id: 'uuid',
  source: 'Salary',
  amount: 7500,
  created_at: new Date(),
  updated_at: new Date(),
  type: ReportType.EXPENSE,
});