import clsx from 'clsx';

export default function LogoIcon(props: React.ComponentProps<'div'>) {
  return (
    <div {...props} className={clsx('h-4 w-4', props.className)}>
      <img
        src="/1.png"
        alt={`${process.env.SITE_NAME} logo`}
        className="w-full h-full object-contain dark:invert"
      />
    </div>
  );
}