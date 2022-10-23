import styles from './CircleText.module.css'

const CircleText = ({ text }) => {
  return (
    <svg className={styles.svg} viewBox='0 0 100 100' width='250' height='250'>
      <defs>
        <path
          id='circle'
          d='
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0'
        />
        <animateTransform
          attributeName='transform'
          begin='0s'
          dur='30s'
          type='rotate'
          from='0 250 250'
          to='360 250 250'
          repeatCount='indefinite'
        />
      </defs>
      <text font-size='15.5' font-family='OrbitronExtraBold'>
        <textPath
          className={styles.svg}
          xlinkHref='#circle'
          font-family='OrbitronExtraBold'
        >
          {text}
        </textPath>
      </text>
    </svg>
  );
}
export default CircleText