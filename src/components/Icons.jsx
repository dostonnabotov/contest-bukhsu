import LogoIcon from "../assets/logo.svg";

export const Logo = () => {
  return <img src={LogoIcon} alt="Logo" />;
};

export const BookIcon = ({ fillColor = "var(--clr-secondary)" }) => {
  return (
    <svg
      width="76"
      height="76"
      viewBox="0 0 76 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_3_91)">
        <path
          d="M42.4313 23.532C42.4313 23.532 40.4088 17.6182 32.0866 14.9159C23.7643 12.2135 18.6535 15.8109 18.6535 15.8109L7.84399 49.0999C7.84399 49.0999 12.1828 47.8803 20.505 50.5826C28.8273 53.285 31.6218 56.8209 31.6218 56.8209M42.4313 23.532L31.6218 56.8209M42.4313 23.532C42.4313 23.532 47.5422 19.9345 55.8644 22.6369C64.1867 25.3393 66.2091 31.253 66.2091 31.253L55.3997 64.542C55.3997 64.542 52.6051 61.006 44.2828 58.3037C35.9606 55.6013 31.6218 56.8209 31.6218 56.8209"
          stroke={fillColor}
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3_91">
          <rect
            width="60"
            height="60"
            fill="white"
            transform="translate(18.5305) rotate(17.9895)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const PencilIcon = ({ fillColor = "var(--clr-primary)" }) => {
  return (
    <svg
      width="76"
      height="76"
      viewBox="0 0 76 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M44.6938 27.3677C44.9352 27.417 45.1645 27.5133 45.3686 27.6512C45.5727 27.7891 45.7476 27.9658 45.8834 28.1714C46.0192 28.3769 46.1131 28.6072 46.1598 28.849C46.2066 29.0909 46.2052 29.3396 46.1558 29.5809L42.7401 46.309C42.6923 46.5516 42.597 46.7824 42.4597 46.988C42.3224 47.1937 42.1457 47.3701 41.9399 47.5072C41.7342 47.6443 41.5033 47.7393 41.2606 47.7868C41.0179 47.8343 40.7683 47.8334 40.526 47.784C40.2837 47.7346 40.0535 47.6378 39.8488 47.4991C39.6441 47.3604 39.4688 47.1826 39.3331 46.9759C39.1974 46.7693 39.1039 46.5377 39.058 46.2948C39.0121 46.0518 39.0147 45.8021 39.0657 45.5602L42.483 28.8289C42.5827 28.3421 42.8715 27.9148 43.286 27.6408C43.7006 27.3668 44.2069 27.2686 44.6938 27.3677Z"
        fill={fillColor}
      />
      <path
        d="M38.5395 16.1158C39.5023 14.6943 40.9885 13.7114 42.6735 13.3818C43.4047 13.2429 44.1194 13.2755 44.8523 13.3705C45.5536 13.4656 46.391 13.6365 47.392 13.8396L47.5138 13.8648C48.5116 14.0664 49.3521 14.2388 50.0346 14.4272C50.7454 14.6219 51.4184 14.8688 52.0354 15.2873C53.4608 16.2475 54.4447 17.7321 54.771 19.4181C54.892 20.1394 54.895 20.8755 54.7799 21.5977C54.6872 22.2983 54.514 23.1364 54.31 24.1351L49.1856 49.2288C48.884 50.8808 48.1053 52.4084 46.9456 53.623L43.3509 57.5448C42.7135 58.2403 42.1535 58.8519 41.6558 59.3029C41.3229 59.6166 40.9521 59.8875 40.552 60.1094C40.4255 60.1826 40.2927 60.2447 40.1553 60.2947L25.929 65.0498C25.4574 65.2075 24.9424 65.1713 24.4975 64.9493C24.0525 64.7272 23.7139 64.3375 23.5563 63.8659C23.3987 63.3943 23.4348 62.8793 23.6569 62.4344C23.8789 61.9894 24.2686 61.6509 24.7402 61.4932L35.0211 58.0569L34.9673 57.9431C34.6473 57.1951 34.3579 56.4345 34.0997 55.663L32.3287 50.6483C31.7359 49.0778 31.6171 47.3678 31.9871 45.7304L37.1138 20.6359C37.3154 19.638 37.4879 18.7975 37.6762 18.1151C37.8733 17.4034 38.121 16.7328 38.5363 16.1143M43.3841 17.0613C42.6745 17.2012 42.0485 17.615 41.6418 18.213C41.5486 18.3523 41.4318 18.5864 41.2868 19.1146C41.1236 19.7495 40.9797 20.3892 40.8551 21.0329L40.9136 21.0344C41.943 21.0857 43.5148 21.2615 45.8395 21.734C48.1333 22.2009 49.658 22.7562 50.6592 23.2518C50.8577 22.284 50.9899 21.623 51.0599 21.0988C51.1314 20.5556 51.1185 20.2963 51.0867 20.1303C50.9457 19.4237 50.533 18.8006 49.9374 18.3952C49.7974 18.2996 49.5641 18.1852 49.0351 18.0378C48.2628 17.844 47.4849 17.6732 46.7025 17.5258C45.6271 17.3054 44.9123 17.1621 44.3525 17.0882C43.8094 17.0167 43.5501 17.0296 43.3841 17.0613ZM49.5784 26.9265L49.5918 26.9431L49.6195 26.9707L49.6512 27.0023L49.6441 26.9968L49.5697 26.9162L49.5784 26.9265ZM49.5697 26.9162L49.5641 26.9075L49.5657 26.9123M49.6227 26.9802C49.448 26.854 49.2628 26.7431 49.069 26.6486C48.4339 26.3258 47.2184 25.8438 45.0907 25.4083C42.9075 24.965 41.5255 24.8207 40.7262 24.7795C40.515 24.7687 40.3036 24.7647 40.0922 24.7673L35.6591 46.48C35.4257 47.4499 35.4956 48.4681 35.8591 49.3971L37.4812 53.9897C38.6985 53.7674 39.9249 54.0138 40.9397 54.6209L44.1789 51.0868C44.8786 50.3748 45.3428 49.4651 45.5089 48.4808L49.8577 27.1864C49.7829 27.1273 49.7116 27.064 49.6441 26.9968L49.6227 26.9802Z"
        fill={fillColor}
      />
    </svg>
  );
};

export const DownloadIcon = ({ fillColor = "#fff" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.738 3.25C9.96401 3.25 9.31901 3.841 9.25101 4.612C9.1095 6.22293 9.07376 7.8414 9.14401 9.457L8.89101 9.475L7.40101 9.583C7.1834 9.5989 6.97366 9.67103 6.7923 9.79233C6.61095 9.91363 6.4642 10.08 6.36642 10.275C6.26865 10.47 6.22319 10.6871 6.23452 10.905C6.24584 11.1229 6.31354 11.3341 6.43101 11.518C7.52829 13.2331 8.94092 14.7244 10.594 15.913L11.19 16.342C11.4262 16.5113 11.7094 16.6024 12 16.6024C12.2906 16.6024 12.5739 16.5113 12.81 16.342L13.406 15.913C15.0607 14.7263 16.4737 13.2346 17.569 11.518C17.6865 11.3341 17.7542 11.1229 17.7655 10.905C17.7768 10.6871 17.7314 10.47 17.6336 10.275C17.5358 10.08 17.3891 9.91363 17.2077 9.79233C17.0264 9.67103 16.8166 9.5989 16.599 9.583L15.109 9.475L14.856 9.457C14.926 7.842 14.89 6.223 14.749 4.612C14.7169 4.23994 14.5463 3.89348 14.2709 3.64124C13.9955 3.389 13.6355 3.24937 13.262 3.25H10.738ZM10.682 10.115C10.568 8.32763 10.5891 6.5342 10.745 4.75H13.255C13.4113 6.53418 13.4327 8.3276 13.319 10.115C13.3128 10.2141 13.3263 10.3134 13.3588 10.4073C13.3913 10.5011 13.442 10.5875 13.5082 10.6616C13.5743 10.7356 13.6545 10.7958 13.7441 10.8386C13.8337 10.8814 13.9308 10.906 14.03 10.911C14.354 10.927 14.6773 10.947 15 10.971L16.081 11.05C15.1201 12.4634 13.9186 13.6972 12.531 14.695L12.001 15.076L11.469 14.695C10.0815 13.6972 8.87988 12.4634 7.91901 11.05L9.00001 10.97C9.32334 10.9467 9.64668 10.927 9.97001 10.911C10.0693 10.9062 10.1666 10.8816 10.2562 10.8389C10.3459 10.7961 10.4262 10.736 10.4925 10.6619C10.5587 10.5878 10.6096 10.5014 10.6421 10.4075C10.6747 10.3136 10.6882 10.2142 10.682 10.115Z"
        fill={fillColor}
      />
      <path
        d="M5.75 17C5.75 16.8011 5.67098 16.6103 5.53033 16.4697C5.38968 16.329 5.19891 16.25 5 16.25C4.80109 16.25 4.61032 16.329 4.46967 16.4697C4.32902 16.6103 4.25 16.8011 4.25 17V19C4.25 19.966 5.034 20.75 6 20.75H18C18.4641 20.75 18.9092 20.5656 19.2374 20.2374C19.5656 19.9092 19.75 19.4641 19.75 19V17C19.75 16.8011 19.671 16.6103 19.5303 16.4697C19.3897 16.329 19.1989 16.25 19 16.25C18.8011 16.25 18.6103 16.329 18.4697 16.4697C18.329 16.6103 18.25 16.8011 18.25 17V19C18.25 19.0663 18.2237 19.1299 18.1768 19.1768C18.1299 19.2237 18.0663 19.25 18 19.25H6C5.9337 19.25 5.87011 19.2237 5.82322 19.1768C5.77634 19.1299 5.75 19.0663 5.75 19V17Z"
        fill={fillColor}
      />
    </svg>
  );
};