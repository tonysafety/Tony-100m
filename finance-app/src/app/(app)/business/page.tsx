import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BusinessPage() {
  return (
    <div className="grid gap-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Business</h1>
        <p className="text-muted-foreground text-sm">
          獨資/合夥：收入支出、利潤彙總（可併入稅務估算）
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>即將完成</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground text-sm">
          之後會有：生意收入/支出分類、評稅年度彙總。
        </CardContent>
      </Card>
    </div>
  )
}


