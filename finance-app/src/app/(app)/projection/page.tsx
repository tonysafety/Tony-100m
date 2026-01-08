import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectionPage() {
  return (
    <div className="grid gap-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Projection</h1>
        <p className="text-muted-foreground text-sm">
          12 個月逐日現金流預測（以結餘快照 + 到期項目推算）
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>即將完成</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground text-sm">
          之後會有：逐日餘額曲線、最低餘額警戒、到期項目分解。
        </CardContent>
      </Card>
    </div>
  )
}


