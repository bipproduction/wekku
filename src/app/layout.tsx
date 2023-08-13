import ViewLoadImgUrl from '@/lib/view/load_img_url';
import RootStyleRegistry from './emotion';

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <RootStyleRegistry>
      <div>
        <ViewLoadImgUrl />
        {children}
      </div>
    </RootStyleRegistry>
  );
}
