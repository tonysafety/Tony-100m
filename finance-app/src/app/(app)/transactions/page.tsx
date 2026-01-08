import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TransactionsPage() {
  return (
    <div className="grid gap-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Transactions</h1>
        <p className="text-muted-foreground text-sm">
          逐筆交易（匯入/手動）+ 分類/標籤
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>即將完成</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground text-sm">
          之後會有：匯入 CSV/XLSX、篩選、批量分類、轉帳。
        </CardContent>
      </Card>
    </div>
  )
}


