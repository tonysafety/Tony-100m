import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <div className="grid gap-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground text-sm">
          你嘅個人＋獨資財政總覽（之後會接入真實數據）
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">合併現金結餘</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">$—</div>
            <div className="text-muted-foreground text-xs">
              來源：每月結餘快照
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">本月淨現金流</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">$—</div>
            <div className="text-muted-foreground text-xs">
              來源：交易＋定期項目
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">未來 30 日到期</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">—</div>
            <div className="text-muted-foreground text-xs">
              來源：Scheduled items
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


