export enum IconNames {
  AlertCircle = 'alert-circle',
  AlertTriangle = 'alert-triangle',
  ArrowDown = 'arrow-down',
  ArrowLeft = 'arrow-left',
  ArrowRight = 'arrow-right',
  ArrowUp = 'arrow-up',
  Check = 'check',
  ChevronDown = 'chevron-down',
  ChevronLeft = 'chevron-left',
  ChevronRight = 'chevron-right',
  ChevronUp = 'chevron-up',
  CreditCard = 'credit-card',
  Error = 'error',
  DownloadCloud = 'download-cloud',
  Eye = 'eye',
  EyeOff = 'eye-off',
  HamburgerMenu = 'hamburger-menu',
  Delete = 'delete',
  Info = 'info',
  Lock = 'lock',
  MinusCircle = 'minus-circle',
  Refinance = 'refinance',
  RefinanceWithPercentage = 'refinance-with-percentage',
  NotificationBell = 'notification-bell',
  PlusCircle = 'plus-circle',
  Search = 'search',
  X = 'x',
  DoingGreat = 'doing-great',
  Dollar = 'dollar',
  Repeat = 'repeat',
  Printer = 'printer',
  FaceBook = 'facebook',
  Twitter = 'twitter',
  Instagram = 'instagram',
  YouTube = 'you-tube',
  Pinterest = 'pinterest',
  CheckCircle = 'check-circle',
  Approved = 'approved',
  ApprovedSquare = 'approved-square',
  Scheduled = 'scheduled',
  User = 'user',
}

export enum IconSizes {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
}

export const IconSet = (name, style, color) => {
  const iconHTML = {
    'alert-circle': `
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="${style}" aria-label="${name}">
  <path d="M16 29.3334C23.3638 29.3334 29.3333 23.3638 29.3333 16C29.3333 8.63622 23.3638 2.66669 16 2.66669C8.6362 2.66669 2.66666 8.63622 2.66666 16C2.66666 23.3638 8.6362 29.3334 16 29.3334Z" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16 10.6667V16" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16 21.3333H16.0133" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,
    'alert-triangle': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="${style}" aria-label="${name}">
<path d="M10.2908 3.85999L1.82075 18C1.64612 18.3024 1.55372 18.6453 1.55274 18.9945C1.55176 19.3437 1.64224 19.6871 1.81518 19.9905C1.98812 20.2939 2.23748 20.5467 2.53846 20.7238C2.83944 20.9009 3.18155 20.9962 3.53075 21H20.4708C20.82 20.9962 21.1621 20.9009 21.463 20.7238C21.764 20.5467 22.0134 20.2939 22.1863 19.9905C22.3593 19.6871 22.4497 19.3437 22.4488 18.9945C22.4478 18.6453 22.3554 18.3024 22.1808 18L13.7108 3.85999C13.5325 3.5661 13.2815 3.32311 12.9819 3.15447C12.6824 2.98584 12.3445 2.89725 12.0008 2.89725C11.657 2.89725 11.3191 2.98584 11.0196 3.15447C10.72 3.32311 10.469 3.5661 10.2908 3.85999V3.85999Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 9V13" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 17H12.01" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    'arrow-down': `
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="${style}" aria-label="${name}">
  <path d="M16 6.66669V25.3334" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M25.3334 16L16 25.3333L6.66669 16" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,

    'arrow-left': `
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="${style}" aria-label="${name}">
  <path d="M25.3334 16H6.66669" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16 25.3334L6.66669 16L16 6.66669" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,

    'arrow-right': `
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="${style}" aria-label="${name}">
  <path d="M6.66669 16H25.3334" stroke="${color}
  " stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16 6.66669L25.3333 16L16 25.3334" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,

    'arrow-up': `
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="${style}" aria-label="${name}">
  <path d="M16 25.3334V6.66669" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.66663 16L16 6.66669L25.3333 16" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,

    check: `
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="${style}" aria-label="${name}">
  <path d="M26.6666 8L12 22.6667L5.33331 16" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,

    'chevron-down': `
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="${style}" aria-label="${name}">
  <path d="M8 12L16 20L24 12" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,

    'chevron-left': `
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="${style}" aria-label="${name}">
  <path d="M20 24L12 16L20 8" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,

    'chevron-right': `
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="${style}" aria-label="${name}">
  <path d="M12 24L20 16L12 8" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,

    'chevron-up': `
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="${style}" aria-label="${name}">
  <path d="M24 20L16 12L8 20" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,
    error: `
  <svg width="36" height="38" viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg" class="${style}" aria-label="${name}">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M25.083 4H7C3.13401 4 0 7.13401 0 11V31C0 34.866 3.13401 38 7 38H27C30.866 38 34 34.866 34 31V11C34 10.737 33.9855 10.4773 33.9572 10.2218C33.3608 10.5603 32.7007 10.7996 31.9993 10.9172C31.9998 10.9447 32 10.9723 32 11V31C32 33.7614 29.7614 36 27 36H7C4.23858 36 2 33.7614 2 31V11C2 8.23858 4.23858 6 7 6H25.083C25.0284 5.67479 25 5.34071 25 5C25 4.65929 25.0284 4.32521 25.083 4Z" fill="${color}"/>
  <circle cx="31.5" cy="4.5" r="4.5" fill="${color}"/>
  <path d="M12.86 11H21.14L27 16.86V25.14L21.14 31H12.86L7 25.14V16.86L12.86 11Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17 17V21" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17 25H17.01" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,
    eye: `
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="${style}" aria-label="${name}">
  <path d="M1.33331 16C1.33331 16 6.66665 5.33331 16 5.33331C25.3333 5.33331 30.6666 16 30.6666 16C30.6666 16 25.3333 26.6666 16 26.6666C6.66665 26.6666 1.33331 16 1.33331 16Z" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,

    'eye-off': `
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="${style}" aria-label="${name}">
  <path d="M13.2 5.65335C14.1178 5.43852 15.0574 5.33113 16 5.33335C25.3333 5.33335 30.6666 16 30.6666 16C29.8573 17.5142 28.8921 18.9397 27.7866 20.2533M18.8266 18.8267C18.4604 19.2197 18.0188 19.5349 17.5282 19.7535C17.0375 19.9721 16.5078 20.0897 15.9708 20.0992C15.4337 20.1086 14.9002 20.0098 14.4021 19.8087C13.9041 19.6075 13.4516 19.3081 13.0718 18.9282C12.6919 18.5484 12.3925 18.0959 12.1913 17.5979C11.9901 17.0998 11.8913 16.5663 11.9008 16.0292C11.9103 15.4921 12.0279 14.9625 12.2465 14.4718C12.4651 13.9811 12.7803 13.5395 13.1733 13.1733M23.92 23.92C21.6408 25.6573 18.8655 26.6198 16 26.6667C6.66665 26.6667 1.33331 16 1.33331 16C2.99183 12.9092 5.29216 10.2088 8.07998 8.08001L23.92 23.92Z" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1.33331 1.33331L30.6666 30.6666" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,

    'hamburger-menu': `
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="${style}" aria-label="${name}">
  <path d="M4 16H28" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4 8H28" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4 24H28" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,
    'minus-circle': `
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="${style}" aria-label="${name}">
  <path d="M16 29.3346C23.3638 29.3346 29.3333 23.3651 29.3333 16.0013C29.3333 8.63751 23.3638 2.66797 16 2.66797C8.63616 2.66797 2.66663 8.63751 2.66663 16.0013C2.66663 23.3651 8.63616 29.3346 16 29.3346Z" stroke="${color}" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.6666 16H21.3333" stroke="${color}" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,

    'notification-bell': `
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="${style}" aria-label="${name}">
  <path d="M24 10.6667C24 8.54496 23.1571 6.51012 21.6569 5.00983C20.1566 3.50954 18.1217 2.66669 16 2.66669C13.8783 2.66669 11.8434 3.50954 10.3431 5.00983C8.84286 6.51012 8 8.54496 8 10.6667C8 20 4 22.6667 4 22.6667H28C28 22.6667 24 20 24 10.6667Z" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18.3067 28C18.0723 28.4041 17.7358 28.7395 17.331 28.9727C16.9261 29.2059 16.4672 29.3286 16 29.3286C15.5328 29.3286 15.0739 29.2059 14.669 28.9727C14.2642 28.7395 13.9278 28.4041 13.6933 28" stroke="${color}" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,

    info: `
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="${style}" aria-label="${name}">
  <path d="M16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16C29.3333 8.63619 23.3638 2.66666 16 2.66666C8.6362 2.66666 2.66666 8.63619 2.66666 16C2.66666 23.3638 8.6362 29.3333 16 29.3333Z" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16 21.3333V16" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16 10.6667H16.0133" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,

    lock: `
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="${style}" aria-label="${name}">
  <path d="M25.3333 14.6667H6.66667C5.19391 14.6667 4 15.8606 4 17.3333V26.6667C4 28.1394 5.19391 29.3333 6.66667 29.3333H25.3333C26.8061 29.3333 28 28.1394 28 26.6667V17.3333C28 15.8606 26.8061 14.6667 25.3333 14.6667Z" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.33331 14.6667V9.33332C9.33331 7.56521 10.0357 5.86952 11.2859 4.61928C12.5362 3.36904 14.2319 2.66666 16 2.66666C17.7681 2.66666 19.4638 3.36904 20.714 4.61928C21.9643 5.86952 22.6666 7.56521 22.6666 9.33332V14.6667" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,

    'plus-circle': `
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="${style}" aria-label="${name}">
  <path d="M16 29.3346C23.3638 29.3346 29.3333 23.3651 29.3333 16.0013C29.3333 8.63751 23.3638 2.66797 16 2.66797C8.63616 2.66797 2.66663 8.63751 2.66663 16.0013C2.66663 23.3651 8.63616 29.3346 16 29.3346Z" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16 10.668V21.3346" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.6666 16H21.3333" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg> `,
    refinance: `
  <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg" class="${style}" aria-label="${name}">
  <circle cx="32.5" cy="4.5" r="4.5" fill="${color}"/>
  <path d="M17 31C22.5228 31 27 26.5228 27 21C27 15.4772 22.5228 11 17 11C11.4772 11 7 15.4772 7 21C7 26.5228 11.4772 31 17 31Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17 15V21L21 23" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M26.083 4H7C3.13401 4 0 7.13401 0 11V31C0 34.866 3.13401 38 7 38H27C30.866 38 34 34.866 34 31V11C34 10.8865 33.9973 10.7736 33.992 10.6614C33.4886 10.8385 32.9546 10.9504 32.4 10.9869C32.4 10.9913 32.4 10.9956 32.4 11V31C32.4 33.9823 29.9823 36.4 27 36.4H7C4.01766 36.4 1.6 33.9823 1.6 31V11C1.6 8.01766 4.01766 5.6 7 5.6H26.0296C26.01 5.40266 26 5.2025 26 5C26 4.65929 26.0284 4.32521 26.083 4Z" fill="${color}"/>
  </svg>
`,

    'refinance-with-percentage': `
  <svg xmlns="http://www.w3.org/2000/svg" width="37" height="38" viewBox="0 0 37 38" fill="none" class="${style}" aria-label="${name}">
  <circle cx="32.5" cy="4.5" r="4.5" fill="${color}"/>
  <path d="M24 14L10 28" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.5 18C12.8807 18 14 16.8807 14 15.5C14 14.1193 12.8807 13 11.5 13C10.1193 13 9 14.1193 9 15.5C9 16.8807 10.1193 18 11.5 18Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M22.5 29C23.8807 29 25 27.8807 25 26.5C25 25.1193 23.8807 24 22.5 24C21.1193 24 20 25.1193 20 26.5C20 27.8807 21.1193 29 22.5 29Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M26.083 4H7C3.13401 4 0 7.13401 0 11V31C0 34.866 3.13401 38 7 38H27C30.866 38 34 34.866 34 31V11C34 10.8865 33.9973 10.7736 33.992 10.6614C33.4886 10.8385 32.9546 10.9504 32.4 10.9869C32.4 10.9913 32.4 10.9956 32.4 11V31C32.4 33.9823 29.9823 36.4 27 36.4H7C4.01766 36.4 1.6 33.9823 1.6 31V11C1.6 8.01766 4.01766 5.6 7 5.6H26.0296C26.01 5.40266 26 5.2025 26 5C26 4.65929 26.0284 4.32521 26.083 4Z" fill="${color}"/>
  </svg>
`,

    search: `
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="${style}" aria-label="${name}">
  <path d="M14.6667 25.3333C20.5577 25.3333 25.3333 20.5577 25.3333 14.6667C25.3333 8.77563 20.5577 4 14.6667 4C8.77563 4 4 8.77563 4 14.6667C4 20.5577 8.77563 25.3333 14.6667 25.3333Z" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M28 28L22.2 22.2" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,

    x: `
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="${style}" aria-label="${name}">
  <path d="M24 8L8 24" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 8L24 24" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,
    delete: `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10px" height="14px" viewBox="0 0 10 13" version="1.1" class="${style}" aria-label="${name}>
    <g id="surface1">
    <path fill=none stroke-width=2 stroke-linecap=round stroke-linejoin=round stroke="${color}" stroke-opacity=1 stroke-miterlimit=4 d="M 4 4.997596 L 4 3.001202 C 4 2.472356 4.2125 1.963341 4.5875 1.586538 C 4.9625 1.209736 5.46875 0.998197 6 0.998197 L 10 0.998197 C 10.53125 0.998197 11.0375 1.209736 11.4125 1.586538 C 11.7875 1.963341 12 2.472356 12 3.001202 L 12 4.997596 M 15 4.997596 L 15 18.998798 C 15 19.527644 14.7875 20.036659 14.4125 20.413462 C 14.0375 20.790264 13.53125 21.001803 13 21.001803 L 3 21.001803 C 2.46875 21.001803 1.9625 20.790264 1.5875 20.413462 C 1.2125 20.036659 1 19.527644 1 18.998798 L 1 4.997596 Z M 15 4.997596 " transform="matrix(0.625,0,0,0.590909,0,0)"/>
    </g>
    </svg>
`,

    'doing-great': `
  <svg viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg" class="${style}" aria-label="${name}">
  <g clip-path="url(#clip0_8152_97111)">
  <path d="M24.3337 17L18.0003 23.3333L14.667 20L9.66699 25" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20.333 17H24.333V21" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M25.0832 4H7C3.13401 4 0 7.13401 0 11V31C0 34.866 3.13401 38 7 38H26C29.866 38 33 34.866 33 31V11C33 10.8865 32.9973 10.7737 32.992 10.6615C32.519 10.8279 32.0188 10.9367 31.5 10.9795C31.5 10.9863 31.5 10.9932 31.5 11V31C31.5 34.0376 29.0376 36.5 26 36.5H7C3.96243 36.5 1.5 34.0376 1.5 31V11C1.5 7.96243 3.96243 5.5 7 5.5H25.0208C25.0072 5.33513 25.0002 5.16838 25.0002 5C25.0002 4.65929 25.0286 4.32521 25.0832 4Z" fill="${color}"/>
  <circle cx="31.5" cy="4.5" r="4.5" fill="${color}"/>
  <defs>
  <clipPath id="clip0_8152_97111">
  <rect width="16" height="16" fill="white" transform="translate(9 13)"/>
  </clipPath>
  </defs>
  </svg>
  `,
    'download-cloud': `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="${style}" aria-label="${name}">
  <g clip-path="url(#clip0_10997_698)">
  <path d="M8 17L12 21L16 17" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 12V21" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20.8799 18.0899C21.7493 17.4786 22.4013 16.6061 22.7412 15.5991C23.0811 14.5921 23.0913 13.503 22.7703 12.4898C22.4493 11.4766 21.8138 10.592 20.956 9.9645C20.0982 9.33697 19.0628 8.9991 17.9999 8.99993H16.7399C16.4392 7.82781 15.8764 6.73918 15.0941 5.81601C14.3117 4.89285 13.3301 4.15919 12.2231 3.67029C11.1162 3.18138 9.91278 2.94996 8.70346 2.99345C7.49414 3.03694 6.31045 3.3542 5.24149 3.92136C4.17253 4.48852 3.24616 5.29078 2.53212 6.26776C1.81808 7.24474 1.33498 8.37098 1.11919 9.56168C0.903403 10.7524 0.960543 11.9765 1.28631 13.142C1.61208 14.3074 2.19799 15.3837 2.99993 16.2899" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
  <clipPath id="clip0_10997_698">
  <rect width="24" height="24" fill="${color}"/>
  </clipPath>
  </defs>
  </svg>
  `,
    dollar: `
  <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.78409 15.4545V0.90909H5.71591V15.4545H4.78409ZM7.47159 5.5625C7.41856 5.06629 7.19508 4.67992 6.80114 4.40341C6.41099 4.12689 5.90341 3.98864 5.27841 3.98864C4.83902 3.98864 4.46212 4.05492 4.14773 4.1875C3.83333 4.32008 3.5928 4.5 3.42614 4.72727C3.25947 4.95455 3.17424 5.21402 3.17045 5.50568C3.17045 5.74811 3.22538 5.95833 3.33523 6.13636C3.44886 6.31439 3.60227 6.46591 3.79545 6.59091C3.98864 6.71212 4.20265 6.81439 4.4375 6.89773C4.67235 6.98106 4.90909 7.05114 5.14773 7.10795L6.23864 7.38068C6.67803 7.48295 7.10038 7.62121 7.50568 7.79545C7.91477 7.9697 8.2803 8.18939 8.60227 8.45455C8.92803 8.7197 9.18561 9.03977 9.375 9.41477C9.56439 9.78977 9.65909 10.2292 9.65909 10.733C9.65909 11.4148 9.48485 12.0152 9.13636 12.5341C8.78788 13.0492 8.28409 13.4527 7.625 13.7443C6.9697 14.0322 6.17614 14.1761 5.24432 14.1761C4.33902 14.1761 3.55303 14.036 2.88636 13.7557C2.22348 13.4754 1.70455 13.0663 1.32955 12.5284C0.958333 11.9905 0.757576 11.3352 0.727273 10.5625H2.80114C2.83144 10.9678 2.95644 11.3049 3.17614 11.5739C3.39583 11.8428 3.68182 12.0436 4.03409 12.1761C4.39015 12.3087 4.78788 12.375 5.22727 12.375C5.68561 12.375 6.08712 12.3068 6.43182 12.1705C6.7803 12.0303 7.05303 11.8371 7.25 11.5909C7.44697 11.3409 7.54735 11.0492 7.55114 10.7159C7.54735 10.4129 7.45833 10.1629 7.28409 9.96591C7.10985 9.76515 6.86553 9.59848 6.55114 9.46591C6.24053 9.32955 5.87689 9.20833 5.46023 9.10227L4.13636 8.76136C3.17803 8.51515 2.42045 8.14205 1.86364 7.64205C1.31061 7.13826 1.03409 6.4697 1.03409 5.63636C1.03409 4.95076 1.2197 4.35038 1.59091 3.83523C1.96591 3.32008 2.47538 2.92045 3.11932 2.63636C3.76326 2.34848 4.49242 2.20455 5.30682 2.20455C6.13258 2.20455 6.85606 2.34848 7.47727 2.63636C8.10227 2.92045 8.5928 3.31629 8.94886 3.82386C9.30492 4.32765 9.48864 4.9072 9.5 5.5625H7.47159Z" fill="${color}"/>
  </svg>
`,
    repeat: `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 1L21 5L17 9" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3 11V9C3 7.93913 3.42143 6.92172 4.17157 6.17157C4.92172 5.42143 5.93913 5 7 5H21" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7 23L3 19L7 15" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M21 13V15C21 16.0609 20.5786 17.0783 19.8284 17.8284C19.0783 18.5786 18.0609 19 17 19H3" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,

    printer: `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="${style}" aria-label="${name}">
<path d="M6 9V2H18V9" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16V11C2 10.4696 2.21071 9.96086 2.58579 9.58579C2.96086 9.21071 3.46957 9 4 9H20C20.5304 9 21.0391 9.21071 21.4142 9.58579C21.7893 9.96086 22 10.4696 22 11V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H18" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 14H6V22H18V14Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,

    'credit-card': `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="${style}" aria-label="${name}">
<path d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1 10H23" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    approved: `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"  class="${style}" aria-label="${name}">
    <path d="M14.6673 7.38723V8.00056C14.6665 9.43818 14.201 10.837 13.3402 11.9884C12.4794 13.1399 11.2695 13.9822 9.89089 14.3898C8.51227 14.7974 7.03882 14.7485 5.6903 14.2503C4.34177 13.7521 3.19042 12.8313 2.40796 11.6253C1.6255 10.4192 1.25385 8.9926 1.34844 7.5581C1.44303 6.1236 1.99879 4.75811 2.93284 3.66528C3.86689 2.57244 5.12917 1.81082 6.53144 1.49399C7.93371 1.17717 9.40083 1.32212 10.714 1.90723" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14.6667 2.66602L8 9.33935L6 7.33935" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`,
    'approved-square': `<svg width="36" height="38" viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg"  class="${style}" aria-label="${name}">
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.083 4H7C3.13401 4 0 7.13401 0 11V31C0 34.866 3.13401 38 7 38H27C30.866 38 34 34.866 34 31V11C34 10.737 33.9855 10.4773 33.9572 10.2218C33.3608 10.5603 32.7007 10.7996 31.9993 10.9172C31.9998 10.9447 32 10.9723 32 11V31C32 33.7614 29.7614 36 27 36H7C4.23858 36 2 33.7614 2 31V11C2 8.23858 4.23858 6 7 6H25.083C25.0284 5.67479 25 5.34071 25 5C25 4.65929 25.0284 4.32521 25.083 4Z" fill="${color}"/>
<circle cx="31.5" cy="4.5" r="4.5" fill="${color}"/>
<path d="M27 20.0799V20.9999C26.9988 23.1563 26.3005 25.2545 25.0093 26.9817C23.7182 28.7088 21.9033 29.9723 19.8354 30.5838C17.7674 31.1952 15.5573 31.1218 13.5345 30.3744C11.5117 29.6271 9.78465 28.246 8.61096 26.4369C7.43727 24.6279 6.87979 22.4879 7.02168 20.3362C7.16356 18.1844 7.99721 16.1362 9.39828 14.4969C10.7994 12.8577 12.6928 11.7152 14.7962 11.24C16.8996 10.7648 19.1003 10.9822 21.07 11.8599" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27 13L17 23.01L14 20.01" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    scheduled: `<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_3880_6490)">
    <path d="M0.666672 1.66663V5.66663H4.66667" stroke="${color}" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2.34001 9.00001C2.77227 10.2269 3.59156 11.2801 4.67444 12.0009C5.75732 12.7217 7.04513 13.0711 8.34382 12.9963C9.6425 12.9216 10.8817 12.4268 11.8748 11.5865C12.8678 10.7462 13.5608 9.60599 13.8495 8.33758C14.1381 7.06917 14.0067 5.74131 13.4751 4.55407C12.9434 3.36684 12.0404 2.38454 10.9019 1.75518C9.76343 1.12583 8.45127 0.883515 7.16312 1.06475C5.87497 1.24599 4.68061 1.84095 3.76001 2.76001L0.666672 5.66667" stroke="${color}" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    <g clip-path="url(#clip1_3880_6490)">
    <path d="M7.99968 4.55615V9.44504" stroke="${color}" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.11078 5.44507H7.44411C7.23783 5.44507 7.04 5.52701 6.89414 5.67287C6.74828 5.81874 6.66634 6.01657 6.66634 6.22285C6.66634 6.42913 6.74828 6.62696 6.89414 6.77282C7.04 6.91868 7.23783 7.00062 7.44411 7.00062H8.55522C8.7615 7.00062 8.95934 7.08257 9.1052 7.22843C9.25106 7.37429 9.333 7.57212 9.333 7.7784C9.333 7.98468 9.25106 8.18251 9.1052 8.32837C8.95934 8.47424 8.7615 8.55618 8.55522 8.55618H6.66634" stroke="${color}" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    </g>
    <defs>
    <clipPath id="clip0_3880_6490">
    <rect width="15" height="14" fill="white"/>
    </clipPath>
    <clipPath id="clip1_3880_6490">
    <rect width="5.33333" height="5.33333" fill="white" transform="translate(5.33301 4.33398)"/>
    </clipPath>
    </defs>
    </svg>
`,
    user: `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="${style}" aria-label="${name}">
<path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    facebook: `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="${style}" aria-label="${name}">
  <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="${color}" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  
`,
    twitter: `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="${style}" aria-label="${name}">
  <path d="M23 3.00029C22.0424 3.67577 20.9821 4.1924 19.86 4.53029C19.2577 3.8378 18.4573 3.34698 17.567 3.12422C16.6767 2.90145 15.7395 2.95749 14.8821 3.28474C14.0247 3.612 13.2884 4.19469 12.773 4.95401C12.2575 5.71332 11.9877 6.61263 12 7.53029V8.53029C10.2426 8.57586 8.50127 8.1861 6.93101 7.39574C5.36074 6.60537 4.01032 5.43893 3 4.00029C3 4.00029 -1 13.0003 8 17.0003C5.94053 18.3983 3.48716 19.0992 1 19.0003C10 24.0003 21 19.0003 21 7.50029C20.9991 7.22174 20.9723 6.94388 20.92 6.67029C21.9406 5.66378 22.6608 4.393 23 3.00029V3.00029Z" stroke="${color}" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>    
`,
    instagram: `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="${style}" aria-label="${name}">
  <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="${color}" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.9997 11.3703C16.1231 12.2025 15.981 13.0525 15.5935 13.7993C15.206 14.5461 14.5929 15.1517 13.8413 15.53C13.0898 15.9082 12.2382 16.0399 11.4075 15.9062C10.5768 15.7726 9.80947 15.3804 9.21455 14.7855C8.61962 14.1905 8.22744 13.4232 8.09377 12.5925C7.96011 11.7619 8.09177 10.9102 8.47003 10.1587C8.84829 9.40716 9.45389 8.79404 10.2007 8.40654C10.9475 8.01904 11.7975 7.87689 12.6297 8.0003C13.4786 8.12619 14.2646 8.52176 14.8714 9.12861C15.4782 9.73545 15.8738 10.5214 15.9997 11.3703Z" stroke="${color}" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17.5 6.5H17.51" stroke="${color}" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,
    'you-tube': `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="${style}" aria-label="${name}">
  <path d="M22.5401 6.42C22.4213 5.94541 22.1794 5.51057 21.8387 5.15941C21.4981 4.80824 21.0708 4.55318 20.6001 4.42C18.8801 4 12.0001 4 12.0001 4C12.0001 4 5.12008 4 3.40008 4.46C2.92933 4.59318 2.50206 4.84824 2.16143 5.19941C1.8208 5.55057 1.57887 5.98541 1.46008 6.46C1.1453 8.20556 0.991319 9.97631 1.00008 11.75C0.988863 13.537 1.14285 15.3213 1.46008 17.08C1.59104 17.5398 1.83839 17.9581 2.17823 18.2945C2.51806 18.6308 2.9389 18.8738 3.40008 19C5.12008 19.46 12.0001 19.46 12.0001 19.46C12.0001 19.46 18.8801 19.46 20.6001 19C21.0708 18.8668 21.4981 18.6118 21.8387 18.2606C22.1794 17.9094 22.4213 17.4746 22.5401 17C22.8524 15.2676 23.0064 13.5103 23.0001 11.75C23.0113 9.96296 22.8573 8.1787 22.5401 6.42V6.42Z" stroke="${color}" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.75 15.02L15.5 11.75L9.75 8.47998V15.02Z" stroke="${color}" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,
    pinterest: `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="${style}" aria-label="${name}">
  <path xmlns="http://www.w3.org/2000/svg" d="M10.67 15.097C10.164 17.823 9.54802 20.437 7.72002 21.802C7.15702 17.682 8.54902 14.587 9.19502 11.302C8.09302 9.392 9.32802 5.547 11.652 6.494C14.512 7.66 9.17502 13.596 12.758 14.338C16.499 15.112 18.027 7.655 15.707 5.229C12.355 1.728 5.95002 5.15 6.73802 10.163C6.93002 11.389 8.15902 11.761 7.22902 13.453C5.08402 12.962 4.44402 11.22 4.52702 8.897C4.65902 5.097 7.84402 2.435 11.038 2.067C15.078 1.601 18.869 3.594 19.392 7.507C19.982 11.923 17.569 16.707 13.25 16.362C12.079 16.269 11.587 15.672 10.67 15.097Z" fill="${color}"/>
  </svg>
`,
    'check-circle': `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="${style}" aria-label="${name}">
<path d="M29.3337 14.7734V16C29.332 18.8753 28.401 21.6729 26.6794 23.9758C24.9579 26.2787 22.538 27.9633 19.7808 28.7786C17.0236 29.5938 14.0767 29.4959 11.3796 28.4995C8.68257 27.503 6.37987 25.6615 4.81494 23.2494C3.25001 20.8374 2.50671 17.9841 2.69589 15.1151C2.88508 12.2461 3.9966 9.51512 5.8647 7.32945C7.7328 5.14378 10.2574 3.62053 13.0619 2.98688C15.8665 2.35324 18.8007 2.64314 21.427 3.81336" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29.3333 5.33337L16 18.68L12 14.68" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
  };
  return iconHTML[name];
};
