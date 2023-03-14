import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="47"
      height="40"
      viewBox="0 0 100 100"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M 39.6 125.601 L 44 124.801 A 2.593 2.593 0 0 1 44.826 124.921 Q 45.978 125.308 46 126.939 A 4.739 4.739 0 0 1 46 127.001 Q 46 133.481 43.6 138.076 A 17.699 17.699 0 0 1 43.2 138.801 A 19.579 19.579 0 0 1 40.536 142.409 A 14.565 14.565 0 0 1 36.2 145.601 A 43.715 43.715 0 0 1 32.146 147.394 Q 27.9 149.001 24.6 149.001 A 19.383 19.383 0 0 1 18.819 148.185 A 14.656 14.656 0 0 1 10.8 142.101 A 22.784 22.784 0 0 1 8.088 136.237 Q 6.322 130.594 6.208 122.437 A 81.417 81.417 0 0 1 6.2 121.301 A 67.914 67.914 0 0 1 7.019 111.285 Q 8.583 100.858 13.137 87.165 A 237.48 237.48 0 0 1 13.8 85.201 L 2.2 85.201 A 3.167 3.167 0 0 1 1.33 85.092 Q 0.353 84.812 0.094 83.816 A 3.241 3.241 0 0 1 0 83.001 Q 0 80.96 2.925 76.597 A 52.529 52.529 0 0 1 3.4 75.901 A 17.764 17.764 0 0 1 5.18 73.7 Q 6.196 72.646 7.245 72.003 A 6.351 6.351 0 0 1 10.6 71.001 L 19.6 71.001 Q 33.8 39.401 53 16.401 A 60.009 60.009 0 0 1 60.149 9.213 A 74.175 74.175 0 0 1 65.3 5.201 Q 70.742 1.325 74.35 0.338 A 8.594 8.594 0 0 1 76.6 0.001 A 6.973 6.973 0 0 1 79.42 0.55 Q 81.014 1.246 82.117 2.825 A 8.886 8.886 0 0 1 82.6 3.601 A 23.201 23.201 0 0 1 84.614 8.319 Q 88.78 20.93 93.965 58.787 A 1306.172 1306.172 0 0 1 94.8 65.001 A 347.576 347.576 0 0 0 100.369 100.045 A 396.66 396.66 0 0 0 103.1 112.101 A 252.721 252.721 0 0 0 105.281 120.5 Q 108.814 133.134 112.006 138.053 A 9.878 9.878 0 0 0 114 140.401 A 3.276 3.276 0 0 1 114.633 140.94 A 2.131 2.131 0 0 1 115.2 142.401 Q 115.2 145.401 106.7 148.001 Q 98.2 150.601 93.7 150.601 Q 89.534 150.601 87.168 149.658 A 7.907 7.907 0 0 1 86.8 149.501 A 13.122 13.122 0 0 1 85.713 148.945 Q 84.655 148.334 84.127 147.695 A 2.62 2.62 0 0 1 83.8 147.201 Q 80.2 139.401 76.6 110.001 L 75.4 100.601 Q 74.6 91.201 73.8 86.401 L 72.4 85.401 L 30.6 85.201 Q 28.763 93.01 28.332 99.295 A 54.255 54.255 0 0 0 28.2 103.001 A 187.163 187.163 0 0 0 28.231 106.545 Q 28.294 109.858 28.484 112.13 A 34.285 34.285 0 0 0 28.7 114.101 Q 29.11 116.97 31.066 120.176 A 27.118 27.118 0 0 0 32 121.601 A 9.673 9.673 0 0 0 34.662 124.228 Q 36.655 125.515 39.251 125.595 A 11.263 11.263 0 0 0 39.6 125.601 Z M 34.6 71.001 L 34.8 71.001 A 12016.348 12016.348 0 0 1 44.392 71.004 Q 59.894 71.017 64.956 71.073 A 141.77 141.77 0 0 1 66.7 71.101 A 74.025 74.025 0 0 0 67.294 71.113 Q 70.204 71.161 70.97 70.918 A 0.578 0.578 0 0 0 71.2 70.801 A 2.408 2.408 0 0 0 71.696 70.071 A 2.957 2.957 0 0 0 71.8 69.801 Q 68.858 48.512 66.964 38.981 A 110.923 110.923 0 0 0 66.4 36.301 Q 64.519 27.931 62.639 27.432 A 0.927 0.927 0 0 0 62.4 27.401 A 2.781 2.781 0 0 0 61.143 27.744 Q 59.595 28.535 57.592 31.148 A 30.122 30.122 0 0 0 57.4 31.401 A 159.594 159.594 0 0 0 43.979 50.891 A 119.9 119.9 0 0 0 34.6 71.001 Z" />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
