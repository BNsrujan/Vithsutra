import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,

} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { text } from "@/lib/typography"

export function DialogDemo() {
    const handleSubmit = () =>{

    }
  return (
    <Dialog>
      <form>
      <DialogTrigger asChild>
          <Button className={`${text.Buttontext} bg-company-secondary-yello text-black p-6 py-6 hover:bg-c`}>Download Brochure</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Get Brochure</DialogTitle>
            <DialogDescription>
              Complet info about the RFID teliphone 
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" placeholder="Pedro Duarte" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="Comany or institution name">Phone Number</Label>
              <Input id="Cname" name="Cname" type="text" placeholder="+19 xxxxxxxxxx" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="Gmail">Gmail</Label>
              <Input id="Gmail" name="Gmail" type="gmail" placeholder="example@xyz.com" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={handleSubmit} type="submit">Download Brochure</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
