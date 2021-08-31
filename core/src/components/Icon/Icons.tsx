import * as React from 'react';

const viewBox24 = '0 0 24 24';
const viewBox32 = '0 0 32 32';
const viewBox40 = '0 0 40 40';
const viewBox30 = '0 0 30 30';
const viewBox72 = '0 0 72 72';

export type SvgSize = 24 | 40 | 72 | 30;

export interface Svg {
  children: React.ReactNode;
  viewBox: string;
  size: SvgSize;
}

export type IconName =
  | 'attachment'
  | 'add'
  | 'arrow-down'
  | 'arrow-up'
  | 'arrow-left'
  | 'arrow-right'
  | 'up-down'
  | 'close'
  | 'company'
  | 'edit'
  | 'filter'
  | 'information'
  | 'information40'
  | 'person'
  | 'scalara-logo'
  | 'delete'
  | 'delete40'
  | 'upload'
  | 'logout'
  | 'scalara-text'
  | 'reload'
  | 'refresh'
  | 'search'
  | 'menu'
  | 'minus'
  | 'check'
  | 'select'
  | 'success'
  | 'property'
  | 'unlock-accounts'
  | 'contact-data'
  | 'payment-data'
  | 'error'
  | 'warning'
  | 'accounting-not-available'
  | 'circle'
  | 'finance'
  | 'real-estate'
  | 'communication'
  | 'contacts'
  | 'subMenu';

export const icons: Record<IconName, Svg> = {
  circle: {
    children: <circle cx="15" cy="15" r="15" />,
    viewBox: viewBox30,
    size: 30
  },
  subMenu: {
    children: (
      <>
        <path d="M18.2,10.6L14,6.3l-1.4,1.4l3.2,3.2H8c-1.7,0-3-1.3-3-3V4H3v4c0,2.8,2.2,5,5,5h7.8l-3.2,3.2l1.4,1.4l5.7-5.7L18.2,10.6z" />
      </>
    ),
    viewBox: viewBox24,
    size: 24
  },
  error: {
    children: (
      <g>
        <path
          className="st1"
          d="M20,4C11.2,4,4,11.2,4,20s7.2,16,16,16s16-7.2,16-16S28.8,4,20,4z M20,34c-7.7,0-14-6.3-14-14S12.3,6,20,6
		s14,6.3,14,14S27.7,34,20,34z"
        />
        <polygon
          className="st1"
          points="24.9,13.6 20,18.6 15.1,13.6 13.6,15.1 18.6,20 13.6,24.9 15.1,26.4 20,21.4 24.9,26.4 26.4,24.9 
		21.4,20 26.4,15.1 	"
        />
      </g>
    ),
    viewBox: viewBox40,
    size: 40
  },
  'accounting-not-available': {
    children: (
      <g>
        <rect x="24" y="32" width="15" height="2" />
        <rect x="24" y="38" width="12" height="2" />
        <path
          d="M50,8c-6.8,0-12.4,5.3-12.9,12H19h-2.5c-3,0-5.5,2.2-5.5,5v32c0,2.8,2.5,5,5.5,5H48v-2h-2v-6h2V33.8c0.7,0.1,1.3,0.2,2,0.2
		c7.2,0,13-5.8,13-13S57.2,8,50,8z M16.5,22H19v30h-2.5c-1.3,0-2.5,0.4-3.5,1.1V25C13,23.3,14.6,22,16.5,22z M16.5,60
		c-1.9,0-3.5-1.3-3.5-3s1.6-3,3.5-3H19h25v6H16.5z M46,52h-1.5H21V22h16.1c0.4,5.3,4,9.8,8.9,11.4V52z M50,32c-6.1,0-11-4.9-11-11
		s4.9-11,11-11s11,4.9,11,11S56.1,32,50,32z"
        />
        <polygon
          points="53.5,16.1 50,19.6 46.5,16.1 45.1,17.5 48.6,21 45.1,24.5 46.5,25.9 50,22.4 53.5,25.9 54.9,24.5 51.4,21 
		54.9,17.5 	"
        />
      </g>
    ),
    viewBox: viewBox72,
    size: 72
  },
  warning: {
    children: (
      <>
        <path d="M34.5,35h-29l-0.9-1.4l14.5-29h1.8l14.5,29L34.5,35z M7.1,33h25.7L20,7.2L7.1,33z" />
        <rect x="19" y="18" width="2" height="8" />
        <circle cx="20" cy="28.5" r="1.2" />
      </>
    ),
    viewBox: viewBox40,
    size: 40
  },
  'contact-data': {
    children: (
      <>
        <path d="M2,7v26h36V7H2z M8,31c0.1-3.7,2.3-6.7,5-6.7s4.9,3,5,6.7H8z M36,31H20c-0.1-4.8-3.2-8.7-7-8.7S6.1,26.2,6,31H4V9h32V31z" />
        <rect x="22" y="14" width="10" height="2" />
        <rect x="22" y="18" width="6" height="2" />
        <path
          d="M13,21.3c2.2,0,4-1.8,4-4s-1.8-4-4-4s-4,1.8-4,4S10.8,21.3,13,21.3z M13,15.3c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2
		S11.9,15.3,13,15.3z"
        />
      </>
    ),
    viewBox: viewBox40,
    size: 40
  },
  'payment-data': {
    children: (
      <>
        <path d="M2,7v26h36V7H2z M36,31H4V9h32V31z" />
        <polygon points="25.1,27.5 26.5,26.1 25.4,25 32,25 32,23 25.4,23 26.5,21.9 25.1,20.5 22.9,22.6 22.9,22.6 21.5,24 22.9,25.4 	" />
        <path
          d="M14.5,28c1.4,0,2.8-0.4,4-1.2l-1.1-1.7c-0.9,0.6-1.9,0.9-2.9,0.9c-2,0-3.8-1.2-4.8-3H13v-2H9.1C9,20.7,9,20.3,9,20
		s0-0.7,0.1-1H14v-2H9.7c1-1.8,2.7-3,4.8-3c1,0,2,0.3,2.9,0.9l1.1-1.7c-1.2-0.8-2.6-1.2-4-1.2c-3.1,0-5.8,2.1-6.9,5H6v2h1.1
		C7,19.3,7,19.7,7,20s0,0.7,0.1,1H6v2h1.6C8.7,25.9,11.4,28,14.5,28z"
        />
        <polygon points="28.5,18.1 29.9,19.5 32.1,17.4 33.5,16 32.1,14.6 32.1,14.6 29.9,12.5 28.5,13.9 29.6,15 23,15 23,17 29.6,17 	" />
      </>
    ),
    viewBox: viewBox40,
    size: 40
  },
  search: {
    children: (
      <>
        <circle
          cx="9.813"
          cy="9.812"
          r="9.063"
          transform="translate(-3.056 4.62) rotate(-23.025)"
        />
        <line x1="16.221" y1="16.22" x2="23.25" y2="23.25" />
      </>
    ),
    viewBox: viewBox24,
    size: 24
  },
  information: {
    children: (
      <>
        <path
          className="st1"
          d="M12,3c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S17,3,12,3z M12,19c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7S15.9,19,12,19z"
        />
        <circle className="st1" cx="12" cy="8.5" r="1.2" />
        <rect x="11" y="11" className="st1" width="2" height="6" />
      </>
    ),
    viewBox: viewBox24,
    size: 24
  },
  information40: {
    children: (
      <>
        <path
          d="M20,4C11.2,4,4,11.2,4,20s7.2,16,16,16s16-7.2,16-16S28.8,4,20,4z M20,34c-7.7,0-14-6.3-14-14S12.3,6,20,6s14,6.3,14,14
		S27.7,34,20,34z"
        />
        <polygon points="21,19 21,17 19,17 17,17 17,19 19,19 19,26 17,26 17,28 19,28 21,28 23,28 23,26 21,26 	" />
        <circle cx="20" cy="13.5" r="1.5" />
      </>
    ),
    viewBox: viewBox40,
    size: 40
  },
  menu: {
    children: (
      <>
        <path d="M9.00854 11.7021C9.00854 11.3144 9.31367 11 9.69006 11H21.9574C22.3337 11 22.6389 11.3144 22.6389 11.7021C22.6389 12.0899 22.3337 12.4043 21.9574 12.4043H9.69006C9.31367 12.4043 9.00854 12.0899 9.00854 11.7021Z" />
        <path d="M9.00854 16.9681C9.00854 16.5803 9.31367 16.2659 9.69006 16.2659H21.9574C22.3337 16.2659 22.6389 16.5803 22.6389 16.9681C22.6389 17.3558 22.3337 17.6702 21.9574 17.6702H9.69006C9.31367 17.6702 9.00854 17.3558 9.00854 16.9681Z" />
        <path d="M9.00854 22.234C9.00854 21.8463 9.31367 21.5319 9.69006 21.5319H21.9574C22.3337 21.5319 22.6389 21.8463 22.6389 22.234C22.6389 22.6218 22.3337 22.9362 21.9574 22.9362H9.69006C9.31367 22.9362 9.00854 22.6218 9.00854 22.234Z" />
      </>
    ),
    viewBox: viewBox32,
    size: 24
  },
  reload: {
    children: (
      <>
        <polyline points="22.7608696 4.69232174 17.9533913 4.69232174 17.9533913 9.4998" />
        <path d="M17.9530087,4.69146087 C20.1090087,6.38546087 21.4940522,9.01685217 21.4940522,11.9725043 C21.4940522,17.0832 17.3504,21.2268522 12.2387478,21.2268522 C11.3042261,21.2268522 10.4012696,21.089113 9.55092174,20.8308522" />
        <polyline points="1.7173913 19.2522087 6.52486957 19.2522087 6.52486957 14.4447304" />
        <path d="M6.52477391,19.2522087 C4.36877391,17.5582087 2.98468696,14.9277739 2.98468696,11.9721217 C2.98468696,6.86046957 7.12738261,2.71681739 12.2390348,2.71681739 C13.174513,2.71681739 14.076513,2.85551304 14.9278174,3.11377391" />
      </>
    ),
    viewBox: viewBox24,
    size: 24
  },
  filter: {
    children: (
      <polygon points="0.855032242 2.87744586 22.9601521 2.87744586 14.6011304 13 14.6011304 20.6576867 9.55903913 22.7755059 9.55903913 13" />
    ),
    viewBox: viewBox24,
    size: 24
  },
  refresh: {
    children: (
      <>
        <polyline points="15.5959 6.483 21.0789 6.483 21.0789 1" />
        <path d="M22.633,11.939 C22.633,17.636 18.014,22.255 12.317,22.255 C6.619,22.255 2,17.636 2,11.939 C2,6.241 6.619,1.623 12.317,1.623 C16.012,1.623 19.253,3.565 21.075,6.486" />
      </>
    ),
    viewBox: viewBox24,
    size: 24
  },
  'scalara-text': {
    children: (
      <g>
        <path d="M31.1553611,27.2560175 C32.1991247,25.7789934 32.9868709,24.1444201 33.4792123,22.3719912 L12.1509847,22.3719912 L12.1509847,27.2560175 L31.1553611,27.2560175 Z M29.5601751,29.1859956 L6.43982495,29.1859956 C9.37417943,32.1991247 13.4507659,34.0897155 18,34.0897155 C22.5295405,34.0897155 26.6258206,32.2188184 29.5601751,29.1859956 M4.84463895,27.2560175 L10.2210066,27.2560175 L10.2210066,20.4420131 L17.0350109,20.4420131 L17.0350109,13.6280088 L23.8490153,13.6280088 L23.8490153,6.81400438 L29.5404814,6.81400438 C26.6258206,3.80087527 22.5295405,1.92997812 17.9803063,1.92997812 C9.09846827,1.92997812 1.89059081,9.13785558 1.89059081,18.0196937 C1.91028446,21.4463895 2.99343545,24.6564551 4.84463895,27.2560175 M33.892779,20.4420131 C34.0109409,19.6345733 34.0700219,18.8271335 34.0700219,18 C34.0700219,17.1728665 34.0109409,16.345733 33.892779,15.5579869 L18.9649891,15.5579869 L18.9649891,20.4617068 L33.892779,20.4617068 L33.892779,20.4420131 Z M31.1553611,8.74398249 L25.7789934,8.74398249 L25.7789934,13.6280088 L33.4792123,13.6280088 C32.9868709,11.8555799 32.1794311,10.2013129 31.1553611,8.74398249 M0,18 C0,8.0547046 8.0547046,0 18,0 C27.9452954,0 36,8.0547046 36,18 C36,27.9452954 27.9452954,36 18,36 C8.0547046,36 0,27.9452954 0,18" />
        <path d="M53.4682713,24.6564551 C50.9868709,24.6564551 49.273523,23.4354486 48.6236324,21.5448578 L50.3960613,20.5010941 C50.8490153,21.7811816 51.8140044,22.6280088 53.5076586,22.6280088 C55.1422319,22.6280088 55.8512035,21.8796499 55.8512035,20.9540481 C55.8512035,19.8315098 54.8665208,19.4573304 52.9956236,18.8665208 C51.0459519,18.2757112 49.1356674,17.547046 49.1356674,15.1641138 C49.1356674,12.8205689 51.0656455,11.5207877 53.1728665,11.5207877 C55.2407002,11.5207877 56.7571116,12.6236324 57.5448578,14.297593 L55.8118162,15.3019694 C55.3588621,14.297593 54.571116,13.5295405 53.1728665,13.5295405 C51.9715536,13.5295405 51.2035011,14.1400438 51.2035011,15.1050328 C51.2035011,16.0897155 51.9124726,16.5032823 53.7242888,17.0743982 C55.8118162,17.7439825 57.8993435,18.3938731 57.8993435,20.9146608 C57.9190372,23.2582057 56.0875274,24.6564551 53.4682713,24.6564551 M66.761488,24.6564551 C62.940919,24.6564551 60.1838074,21.761488 60.1838074,18.0984683 C60.1838074,14.4354486 62.9212254,11.5404814 66.761488,11.5404814 C69.0656455,11.5404814 71.1137856,12.7221007 72.1772429,14.5536105 L70.3851204,15.5973742 C69.7155361,14.356674 68.356674,13.5492341 66.7811816,13.5492341 C64.0634573,13.5492341 62.2713348,15.4792123 62.2713348,18.0787746 C62.2713348,20.678337 64.0634573,22.6083151 66.7811816,22.6083151 C68.356674,22.6083151 69.7549234,21.8205689 70.3851204,20.5601751 L72.1772429,21.5842451 C71.1334792,23.4748359 69.0853392,24.6564551 66.761488,24.6564551 M83.4617068,24.4398249 L82.5754923,21.8796499 L77.2188184,21.8796499 L76.3326039,24.4398249 L74.107221,24.4398249 L78.6564551,11.7768053 L81.1378556,11.7768053 L85.6870897,24.4398249 L83.4617068,24.4398249 Z M77.9277899,19.9299781 L81.9059081,19.9299781 L79.916849,14.2188184 L77.9277899,19.9299781 Z M90.8862144,22.4507659 L96.0065646,22.4507659 L96.0065646,24.4398249 L88.8183807,24.4398249 L88.8183807,11.7768053 L90.8862144,11.7768053 L90.8862144,22.4507659 Z M107.645514,24.4398249 L106.7593,21.8796499 L101.402626,21.8796499 L100.536105,24.4398249 L98.2910284,24.4398249 L102.859956,11.7768053 L105.341357,11.7768053 L109.890591,24.4398249 L107.645514,24.4398249 Z M102.091904,19.9299781 L106.070022,19.9299781 L104.080963,14.2188184 L102.091904,19.9299781 Z M120.150985,24.4398249 L117.492341,19.8315098 L115.050328,19.8315098 L115.050328,24.4398249 L112.982495,24.4398249 L112.982495,11.7768053 L118.02407,11.7768053 C120.269147,11.7768053 122.061269,13.5886214 122.061269,15.8533917 C122.061269,17.487965 121.037199,18.9256018 119.560175,19.5164114 L122.415755,24.4398249 L120.150985,24.4398249 Z M115.050328,13.726477 L115.050328,17.9606127 L118.004376,17.9606127 C119.107221,17.9606127 119.973742,17.0153173 119.973742,15.8533917 C119.973742,14.6520788 119.087527,13.7461707 118.004376,13.7461707 L115.050328,13.7461707 L115.050328,13.726477 Z M134.369803,24.4398249 L133.483589,21.8796499 L128.126915,21.8796499 L127.2407,24.4398249 L124.995624,24.4398249 L129.564551,11.7768053 L132.045952,11.7768053 L136.595186,24.4398249 L134.369803,24.4398249 Z M128.816193,19.9299781 L132.794311,19.9299781 L130.805252,14.2188184 L128.816193,19.9299781 Z" />
      </g>
    ),
    viewBox: '0 0 146 40',
    size: 40
  },
  logout: {
    children: (
      <>
        <path d="M22,29h-9V11h9l0,4h2v-4c0-1.1-0.9-2-2-2h-9c-1.1,0-2,0.9-2,2v18c0,1.1,0.9,2,2,2h9c1.1,0,2-0.9,2-2v-4h-2L22,29z" />
        <polygon points="33.2,18.6 29,14.3 27.6,15.8 30.8,19 18,19 18,21 30.8,21 27.6,24.2 29,25.7 34.7,20 	" />
      </>
    ),
    viewBox: viewBox40,
    size: 40
  },
  'arrow-left': {
    children: (
      <polyline
        transform="translate(17.000000, 12.000000) rotate(-225.000000) translate(-17.000000, -12.000000) "
        points="9 20 25 20 25 4"
      />
    ),
    viewBox: viewBox24,
    size: 24
  },
  'arrow-right': {
    children: (
      <polyline
        transform="translate(7.000000, 12.000000) rotate(-45.000000) translate(-7.000000, -12.000000) "
        points="-1 20 15 20 15 4"
      />
    ),
    viewBox: viewBox24,
    size: 24
  },
  'scalara-logo': {
    children: (
      <path
        d="M31.1553611,27.2560175 C32.1991247,25.7789934 32.9868709,24.1444201 33.4792123,22.3719912 L12.1509847,22.3719912 L12.1509847,27.2560175 L31.1553611,27.2560175 Z M29.5601751,29.1859956 L6.43982495,29.1859956 C9.37417943,32.1991247 13.4507659,34.0897155 18,34.0897155 C22.5295405,34.0897155 26.6258206,32.2188184 29.5601751,29.1859956 M4.84463895,27.2560175 L10.2210066,27.2560175 L10.2210066,20.4420131 L17.0350109,20.4420131 L17.0350109,13.6280088 L23.8490153,13.6280088 L23.8490153,6.81400438 L29.5404814,6.81400438 C26.6258206,3.80087527 22.5295405,1.92997812 17.9803063,1.92997812 C9.09846827,1.92997812 1.89059081,9.13785558 1.89059081,18.0196937 C1.91028446,21.4463895 2.99343545,24.6564551 4.84463895,27.2560175 M33.892779,20.4420131 C34.0109409,19.6345733 34.0700219,18.8271335 34.0700219,18 C34.0700219,17.1728665 34.0109409,16.345733 33.892779,15.5579869 L18.9649891,15.5579869 L18.9649891,20.4617068 L33.892779,20.4617068 L33.892779,20.4420131 Z M31.1553611,8.74398249 L25.7789934,8.74398249 L25.7789934,13.6280088 L33.4792123,13.6280088 C32.9868709,11.8555799 32.1794311,10.2013129 31.1553611,8.74398249 M0,18 C0,8.0547046 8.0547046,0 18,0 C27.9452954,0 36,8.0547046 36,18 C36,27.9452954 27.9452954,36 18,36 C8.0547046,36 0,27.9452954 0,18"
        id="Shape"
      />
    ),
    viewBox: viewBox40,
    size: 40
  },
  company: {
    children: (
      <>
        <path d="M20,36A16,16,0,1,1,36,20,16,16,0,0,1,20,36ZM20,5A15,15,0,1,0,35,20,15,15,0,0,0,20,5Z" />
        <polygon points="19 11 19 14.28 10 17.28 10 28 12 28 12 18.72 19 16.39 19 27.96 21 27.96 21 13 28 13 28 28 30 28 30 11 19 11" />
        <rect x="23" y="16" width="3" height="2" />
        <rect x="23" y="20" width="3" height="2" />
        <rect x="23" y="24" width="3" height="2" />
        <rect x="14" y="20" width="3" height="2" />
        <rect x="14" y="24" width="3" height="2" />
      </>
    ),
    viewBox: viewBox40,
    size: 40
  },
  person: {
    children: (
      <>
        <path d="M20,9a5,5,0,1,0,5,5A5,5,0,0,0,20,9Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,20,17Z" />
        <path d="M27,29.39l-.18-1c-.66-3.67-3.55-6.34-6.86-6.34s-6.2,2.67-6.86,6.34l-.18,1L11,29l.18-1c.83-4.62,4.54-8,8.82-8s8,3.36,8.82,8L29,29Z" />
        <path d="M20,36A16,16,0,1,1,36,20,16,16,0,0,1,20,36ZM20,5A15,15,0,1,0,35,20,15,15,0,0,0,20,5Z" />
      </>
    ),
    viewBox: viewBox40,
    size: 40
  },
  edit: {
    children: (
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
    ),
    viewBox: viewBox24,
    size: 24
  },
  close: {
    children: (
      <polygon
        className="st1"
        points="19.1,6.3 17.7,4.9 12,10.6 6.3,4.9 4.9,6.3 10.6,12 4.9,17.7 6.3,19.1 12,13.4 17.7,19.1 19.1,17.7
	13.4,12 "
      />
    ),
    viewBox: viewBox24,
    size: 24
  },
  'arrow-down': {
    children: (
      <polygon points="17.7,9.9 16.2,8.5 12,12.7 7.8,8.5 6.3,9.9 10.6,14.1 12,15.5 13.4,14.1 13.4,14.1 " />
    ),
    viewBox: viewBox24,
    size: 24
  },
  'up-down': {
    children: (
      <>
        <polygon points="12,5.3 16.2,9.5 17.7,8.1 12,2.5 6.3,8.1 7.8,9.5 " />
        <polygon points="12,18.7 7.8,14.5 6.3,15.9 12,21.5 17.7,15.9 16.2,14.5 " />
      </>
    ),
    viewBox: viewBox24,
    size: 24
  },
  'arrow-up': {
    children: (
      <polyline
        transform="translate(12.000000, 18.000000) rotate(-135.000000) translate(-12.000000, -18.000000) "
        points="4 26 20 26 20 10"
      />
    ),
    viewBox: viewBox24,
    size: 24
  },
  add: {
    children: (
      <path
        d="M12,24c-0.414,0-0.75-0.336-0.75-0.75v-10.5H0.75C0.336,12.75,0,12.414,0,12s0.336-0.75,0.75-0.75h10.5V0.75
		C11.25,0.336,11.586,0,12,0s0.75,0.336,0.75,0.75v10.5h10.5c0.414,0,0.75,0.336,0.75,0.75s-0.336,0.75-0.75,0.75h-10.5v10.5
		C12.75,23.664,12.414,24,12,24z"
      />
    ),
    viewBox: viewBox24,
    size: 24
  },
  upload: {
    children: (
      <>
        <polygon points="20,12.8 18.6,14.3 14.3,18.7 15.8,20.1 19,16.8 19,29 21,29 21,16.8 24.2,20.1 25.7,18.7 21.4,14.3 	" />
        <path d="M25.4,4H7v32h26V11.8L25.4,4z M31,33.9H9V6.1h15.6l6.4,6.6V33.9z" />
      </>
    ),
    viewBox: viewBox40,
    size: 40
  },
  delete: {
    children: (
      <g>
        <path
          d="M17,4h-2.5V3h-5v1H7H3v2h2v12.2C5,19.8,6.2,21,7.8,21h8.5c1.5,0,2.8-1.2,2.8-2.8V6h2V4H17z M17,18.2c0,0.4-0.3,0.8-0.8,0.8
		H7.8C7.3,19,7,18.7,7,18.2V6h10V18.2z"
        />
        <rect x="9" y="9" width="2" height="7" />
        <rect x="13" y="9" width="2" height="7" />
      </g>
    ),
    viewBox: viewBox24,
    size: 24
  },
  delete40: {
    children: (
      <g>
        <path
          d="M35,7h-3h-9V5h-6v2H8H5v2h3l0.8,22.1c0.1,2.2,1.7,3.9,3.6,3.9h15.1c2,0,3.6-1.7,3.6-3.9L32,9h3V7z M29.2,31
		c0,1.1-0.8,2-1.6,2H12.4c-0.9,0-1.6-0.9-1.6-2L10,9H30L29.2,31z"
        />
        <rect x="14" y="13" width="2" height="16" />
        <rect x="19" y="13" width="2" height="16" />
        <rect x="24" y="13" width="2" height="16" />
      </g>
    ),
    viewBox: viewBox40,
    size: 40
  },
  attachment: {
    children: (
      <path d="M23.25,9.9,12.273,20.878a6.75,6.75,0,0,1-9.546-9.546l9.016-9.015A4.5,4.5,0,1,1,18.106,8.68L9.091,17.7a2.25,2.25,0,0,1-3.182-3.181L14.925,5.5" />
    ),
    viewBox: viewBox24,
    size: 24
  },
  minus: {
    children: (
      <path
        d="M0.75,12.788c-0.414,0-0.75-0.336-0.75-0.75s0.336-0.75,0.75-0.75h22.5c0.414,0,0.75,0.336,0.75,0.75
		s-0.336,0.75-0.75,0.75H0.75z"
      />
    ),
    viewBox: viewBox24,
    size: 24
  },
  check: {
    children: (
      <g>
        <polygon points="10,17.2 5,12.2 6.4,10.8 10,14.4 17.6,6.8 19,8.2 		" />
        <rect x="4" y="5.8" width="16" height="12.4" />
      </g>
    ),
    viewBox: '0 0 24 24',
    size: 24
  },
  select: {
    children: (
      <>
        <polygon points="12,5.3 16.2,9.5 17.7,8.1 12,2.5 6.3,8.1 7.8,9.5 " />
        <polygon points="12,18.7 7.8,14.5 6.3,15.9 12,21.5 17.7,15.9 16.2,14.5 " />
      </>
    ),
    viewBox: viewBox24,
    size: 24
  },
  success: {
    children: (
      <>
        <path
          d="M20,4C11.2,4,4,11.2,4,20s7.2,16,16,16s16-7.2,16-16S28.8,4,20,4z M20,34c-7.7,0-14-6.3-14-14S12.3,6,20,6s14,6.3,14,14
		S27.7,34,20,34z"
        />
        <polygon points="17.5,24.2 13.3,19.9 11.9,21.4 17.5,27 18.9,25.6 28.1,16.4 26.7,15 	" />
      </>
    ),
    viewBox: viewBox40,
    size: 40
  },
  property: {
    children: (
      <g>
        <path
          d="M71.5,56v-2h-4V27v-2h-2h-19V8V6h-2h-25h-2v2v27.7L15,33.7l-11.5,9V61H0v2h3.5h6h2h5h2h8H33v-2h-6.5v-5H71.5z M59.5,49v5
		h-11v-5H59.5z M65.5,27v27h-4v-5v-1v-1h-15v1v1v5h-9V27h7h2H65.5z M19.5,8h25v17h-7h-2v2v27h-9V42.7l-7-5.5V8z M11.5,61v-7h5v7
		H11.5z M18.5,61v-7v-2h-2h-5h-2v2v7h-4V43.7l9.5-7.4l9.5,7.4V61H18.5z"
        />
        <rect x="41.5" y="39" width="2" height="4" />
        <rect x="47.5" y="39" width="2" height="4" />
        <rect x="53.5" y="39" width="2" height="4" />
        <rect x="59.5" y="39" width="2" height="4" />
        <rect x="41.5" y="31" width="2" height="4" />
        <rect x="47.5" y="31" width="2" height="4" />
        <rect x="53.5" y="31" width="2" height="4" />
        <rect x="59.5" y="31" width="2" height="4" />
        <rect x="23.5" y="12" width="17" height="2" />
        <rect x="23.5" y="17" width="17" height="2" />
        <rect x="23.5" y="22" width="7" height="2" />
        <rect x="23.5" y="27" width="7" height="2" />
        <rect x="23.5" y="32" width="7" height="2" />
      </g>
    ),
    viewBox: viewBox72,
    size: 72
  },
  'unlock-accounts': {
    children: (
      <g>
        <rect x="23" y="37" width="15" height="2" />
        <rect x="23" y="43" width="12" height="2" />
        <rect x="49" y="22" width="2" height="8" />
        <path
          d="M58,18v-5.5C58,7.8,54.2,4,49.5,4S41,7.8,41,12.5V13h2v-0.5C43,8.9,45.9,6,49.5,6S56,8.9,56,12.5V18H38v7H18h-2.5
		c-3,0-5.5,2.2-5.5,5v32c0,2.8,2.5,5,5.5,5H47v-2h-2v-6h2V37h8c3.3,0,6-2.7,6-6V18H58z M12,30c0-1.7,1.6-3,3.5-3H18v30h-2.5
		c-1.3,0-2.5,0.4-3.5,1.1V30z M43,65H15.5c-1.9,0-3.5-1.3-3.5-3s1.6-3,3.5-3H18h25V65z M45,57h-1.5H20V27h18v4c0,3.3,2.7,6,6,6h1V57
		z M59,31c0,2.2-1.8,4-4,4H44c-2.2,0-4-1.8-4-4V20h19V31z"
        />
      </g>
    ),
    viewBox: viewBox72,
    size: 72
  },
  finance: {
    children: (
      <>
        <path d="M20,8H20A12,12,0,0,0,20,32h.05A12,12,0,0,0,31.94,21.17c0-.4.06-.81.06-1.22A12,12,0,0,0,20,8Zm5.75,20.45a10.18,10.18,0,0,1-5.7,1.77h-.14a10.28,10.28,0,0,1-7.11-2.95A10.22,10.22,0,0,1,20,9.78H20a10.22,10.22,0,0,1,5.75,18.67Z" />
        <path d="M21.32,15.75a4.21,4.21,0,0,1,2.16.6l1-1.71a6.22,6.22,0,0,0-3.2-.89A6.33,6.33,0,0,0,15.4,18H14v1.5h1.05a5.65,5.65,0,0,0,0,1.5H14v1.5h1.4a6.33,6.33,0,0,0,5.92,4.25,6.22,6.22,0,0,0,3.2-.89l-1-1.71a4.21,4.21,0,0,1-2.16.6A4.28,4.28,0,0,1,17.6,22.5H20V21H17.07a4.05,4.05,0,0,1,0-1.5H20V18H17.6A4.28,4.28,0,0,1,21.32,15.75Z" />
      </>
    ),
    viewBox: viewBox40,
    size: 40
  },
  communication: {
    children: (
      <g>
        <path d="M16,19.5A1.5,1.5,0,1,1,14.5,18,1.5,1.5,0,0,1,16,19.5Z" />
        <path d="M21,19.5A1.5,1.5,0,1,1,19.5,18,1.5,1.5,0,0,1,21,19.5Z" />
        <path d="M26,19.5A1.5,1.5,0,1,1,24.5,18,1.5,1.5,0,0,1,26,19.5Z" />
        <path d="M25.5,11h-12A6.51,6.51,0,0,0,7,17.5v4A6.51,6.51,0,0,0,13.5,28h7.2L28,32.87V27.5a6.5,6.5,0,0,0,4-6v-4A6.51,6.51,0,0,0,25.5,11ZM30,21.5a4.51,4.51,0,0,1-2,3.74A4.45,4.45,0,0,1,26,26v3.18L24.3,28l-3-2H13.5A4.51,4.51,0,0,1,9,21.5v-4A4.51,4.51,0,0,1,13.5,13h12A4.51,4.51,0,0,1,30,17.5Z" />
      </g>
    ),
    viewBox: viewBox40,
    size: 40
  },
  contacts: {
    children: (
      <g>
        <polygon points="14 20 11 20 11 17 9 17 9 20 6 20 6 22 9 22 9 25 11 25 11 22 14 22 14 20" />
        <path d="M22,20a5,5,0,1,1,5-5A5,5,0,0,1,22,20Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,22,12Z" />
        <path d="M29,30.5l-.18-1C28.2,25.75,25.31,23,22,23s-6.2,2.71-6.86,6.46l-.18,1-2-.36.18-1C14,24.42,17.72,21,22,21s8,3.42,8.82,8.13l.18,1Z" />
      </g>
    ),
    viewBox: viewBox40,
    size: 40
  },
  'real-estate': {
    children: (
      <g>
        <polygon points="30 32 28 32 28 15.52 20 9.5 12 15.52 12 32 10 32 10 14.52 20 7 30 14.52 30 32" />
        <polygon points="24 32 22 32 22 25 18 25 18 32 16 32 16 23 24 23 24 32" />
      </g>
    ),
    viewBox: viewBox40,
    size: 40
  }
};
