import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ScheduledPage() {
  return (
    <div className="grid gap-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Scheduled</h1>
        <p className="text-muted-foreground text-sm">
          定期/到期現金流（供樓、稅、保費、信用卡還款等）
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>即將完成</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground text-sm">
          之後會有：週期規則、到期日清單、Dashboard 警示來源。
        </CardContent>
      </Card>
    </div>
  )
}


