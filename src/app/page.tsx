
import { checkHasLoggedIn } from '@/lib/check_auth';
import { cookies } from 'next/headers';
import { Page1 } from './page_1';

export default async function Page() {
  const store = cookies()
  await checkHasLoggedIn()
  return (
    <Page1 data={store.get("session")?.value} />
  );
}
