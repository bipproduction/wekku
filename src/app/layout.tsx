import { ViewLoadUser } from '@/lib/load_user';
import RootStyleRegistry from './emotion';

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <RootStyleRegistry>
      <div>
        {children}
      </div>
    </RootStyleRegistry>
  );
}
