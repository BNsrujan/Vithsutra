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


export function DialogDemo() {
    const handleSubmit = () =>{

    }
  return (
    <Dialog>
      <form>
      <DialogTrigger asChild>
          <Button  variant={"neumorphicYellow"}>Download Brochure</Button>
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
              
              <Input id="name-1" name="name" label="Name" placeholder="Pedro Duarte" />
            </div>
            <div className="grid gap-3">
              
              <Input id="Cname" name="Cname" type="text" label="Phone Number" placeholder="+19 xxxxxxxxxx" />
            </div>
            <div className="grid gap-3">
              <Input id="Gmail" name="Gmail" type="gmail" label="Gmail" placeholder="example@xyz.com" />
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
