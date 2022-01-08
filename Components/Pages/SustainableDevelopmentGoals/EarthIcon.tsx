const EarthIcon = ({ width, color }: EarthIconProps) => (
  <svg
    width={width}
    height="auto"
    viewBox="0 0 700 700"
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
  >
    <path d="m105.88 347.7 19.359-121.3-25.266-67.594c-18.047 37.406-27.672 78.531-27.672 121.19 0 35 6.453 69.125 18.812 100.84 7.11-16.078 12.688-28.438 14.766-33.141z" />
    <path d="M301 417.59c1.969-14.328-7-28-21-31.828l-58.734-16.078c-28.328-7.766-48.016-33.688-48.016-63 0-15.969 5.797-31.391 16.406-43.312l27.891-31.5c6.672-7.547 15.203-13.562 24.609-17.281L302.75 190.2c23.078-9.297 39.703-30.406 43.312-55.016l4.594-31.281c.984-6.453-.656-12.906-4.594-18.047s-9.625-8.531-16.078-9.406l-11.156-1.531c-17.828-2.407-33.578-13.344-42-29.312-5.14-9.844-7.219-20.781-6.234-31.61-43.641 13.017-83.672 36.75-116.7 69.782-11.703 11.375-22.094 23.734-31.281 36.75a17.427 17.427 0 0 1 1.64 3.172l35.438 94.828c1.094 2.843 1.422 5.906.875 8.859l-20.453 128.08a15.523 15.523 0 0 1-1.312 4.375c-.11.219-11.594 25.922-25.594 57.312-.657 1.422-1.422 2.734-2.406 3.937 11.812 19.906 26.14 38.391 42.875 55.125 36.203 36.203 80.609 61.141 129.06 73.172zm204.86-28.11c5.25-8.094 16.078-10.391 24.172-5.14 34.562 22.421 64.203 48.015 88.703 76.561 16.625-30.953 13.234-68.14-9.844-96.25-8.312-10.172-17.938-19.359-28.547-27.344-46.156-34.672-107.52-42.219-160.02-19.797-5.797 2.516-9.844 7.985-10.5 14.22-6.125 57.093 18.703 114.08 64.75 148.64 10.61 7.984 22.094 14.655 34.234 19.796 18.266 7.766 37.297 9.297 55.344 4.594 12.578 14.656 23.734 30.188 33.25 46.484 4.813 8.313 15.531 11.156 23.953 6.344.438-.219.766-.547 1.203-.766 7.438-5.14 9.735-15.203 5.14-23.188-14.655-25.156-31.827-48.562-54.14-70.109-18.266-18.156-39.156-34.78-62.453-49.875-8.203-5.14-10.5-15.969-5.25-24.172z" />
    <path d="M453.58 508.48c-55.891-41.891-85.969-111.02-78.641-180.36 1.969-18.812 14.109-35.219 31.5-42.656 63.984-27.344 138.58-18.156 194.8 23.953 7.875 5.906 15.203 12.359 22.094 19.25 2.844-15.859 4.266-32.156 4.266-48.672 0-74.156-28.875-143.94-81.375-196.33-52.5-52.5-122.17-81.375-196.33-81.375-13.672 0-27.125.984-40.36 2.953l-2.187 4.594c-3.062 6.125-2.953 13.125.219 19.14s8.969 10.063 15.75 10.939l11.156 1.531c15.75 2.078 29.75 10.281 39.375 23.078 9.625 12.688 13.672 28.438 11.266 44.188l-4.594 31.281c-5.36 36.97-30.297 68.578-64.859 82.47l-60.594 24.39c-4.375 1.75-8.312 4.484-11.375 8.094l-27.89 31.5c-4.923 5.578-7.657 12.688-7.657 20.125 0 13.672 9.187 25.703 22.312 29.312l58.734 16.078c30.844 8.422 50.75 38.719 46.375 70.438L317.19 555.73a272.44 272.44 0 0 0 32.812 1.969c46.156 0 90.672-11.156 130.27-32.375a206.396 206.396 0 0 1-26.688-16.844z" />
  </svg>
);

export default EarthIcon;

interface EarthIconProps {
  width: string;
  color: string;
}
