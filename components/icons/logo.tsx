import clsx from 'clsx';

export default function LogoIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`${process.env.SITE_NAME} logo`}
      viewBox="0 0 500 500"
      {...props}
      className={clsx('h-4 w-4 fill-black dark:fill-white', props.className)}
    >
      <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)">
        <path d="M0 2500 l0 -2500 2500 0 2500 0 0 2500 0 2500 -2500 0 -2500 0 0
        -2500z m1628 407 l3 -128 32 23 c26 18 45 23 98 23 56 0 71 -4 101 -27 51 -39
        71 -98 66 -190 -7 -126 -60 -192 -164 -204 -40 -5 -57 -1 -97 20 -58 31 -57
        31 -57 6 0 -16 -7 -20 -35 -20 l-35 0 0 285 0 285 -30 0 c-25 0 -30 4 -30 24
        0 21 6 25 38 29 20 2 53 4 72 3 l35 -1 3 -128z m-751 92 c57 -30 83 -63 90
        -116 4 -33 1 -45 -16 -62 -31 -31 -80 -25 -101 12 -14 25 -13 30 3 59 19 32
        19 33 -6 54 -82 70 -230 12 -265 -103 -28 -94 -9 -265 36 -318 43 -50 73 -65
        135 -65 72 0 117 24 141 75 14 29 22 35 48 35 28 0 30 -2 23 -27 -11 -44 -40
        -77 -97 -108 -46 -26 -63 -30 -133 -30 -70 0 -87 4 -134 30 -102 56 -147 154
        -139 304 8 153 77 244 213 282 52 14 152 3 202 -22z m2943 -54 l0 -35 -140 0
        -140 0 0 35 0 35 140 0 140 0 0 -35z m-1521 -145 c42 -29 62 -71 68 -142 l6
        -58 -142 0 -141 0 0 -26 c0 -105 122 -162 190 -89 27 28 70 34 70 9 0 -25 -53
        -71 -96 -83 -174 -48 -305 97 -253 282 13 48 72 114 113 127 52 16 150 6 185
        -20z" />
        <path d="M1678 2753 c-72 -76 -57 -260 24 -294 95 -39 167 92 127 235 -23 84
        -99 114 -151 59z" />
        <path d="M2130 2760 c-24 -24 -40 -62 -40 -96 0 -24 1 -24 90 -24 l90 0 0 44
        c0 62 -29 96 -81 96 -26 0 -46 -7 -59 -20z" />
      </g>
    </svg>
  );
}