import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TaxPage() {
  return (
    <div className="grid gap-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Tax (HK)</h1>
        <p className="text-muted-foreground text-sm">
          香港：個人入息課稅估算（薪俸 + 獨資利潤合併）+ 扣除/免稅額逐項輸入
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>即將完成</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground text-sm">
          之後會有：估算稅款、暫繳/分期到期日、生成 scheduled items。
        </CardContent>
      </Card>
    </div>
  )
}


