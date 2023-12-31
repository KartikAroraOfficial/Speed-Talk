import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { UserButton } from '@clerk/nextjs'

const Home = () => {
  return (
    <div>
      Discord Clone Page <br />
      <Button>Button</Button>
      <UserButton afterSignOutUrl="/"/>
      <ModeToggle />
    </div>
  )
}

export default Home;