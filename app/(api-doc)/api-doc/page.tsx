import { getApiDocs } from '@/lib/swagger';
import ReactSwagger from '@/components/react-swagger';

export default async function IndexPage() {
  // This route contains the docs for all the API routes in the app
  // This was done because the swagger docs are not working with the nextjs routes
  const channelSpec = await getApiDocs('app/api/channels');

  return (
    <div className='flex bg-white h-auto w-auto justify-center '>

    <div className="scroll-m-10 bg-center">
      <ReactSwagger spec={channelSpec} />
    </div>
    </div>
  );
}