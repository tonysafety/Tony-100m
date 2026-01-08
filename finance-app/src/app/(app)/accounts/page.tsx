import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AccountsPage() {
  return (
    <div className="grid gap-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Accounts</h1>
        <p className="text-muted-foreground text-sm">
          帳戶管理 + 每月結餘快照（對帳/預測起點）
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>即將完成</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground text-sm">
          之後會有：新增帳戶、輸入月結餘、查看歷史快照。
        </CardContent>
      </Card>
    </div>
  )
}


