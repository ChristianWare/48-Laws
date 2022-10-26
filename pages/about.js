import Image from "next/image";
import SectionHeader from "../comps/sectionHeader/SectionHeader";
import styles from "../styles/about.module.css";
import img from "../public//images/law21.jpg";

const about = () => {
  return (
    <>
      <SectionHeader text1='about' text2='48 laws' />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.title}>
              Author:
              <br /> <span>Robert Greene</span>
            </h2>
            <p>
              Robert Greene is noteworthy for writing books on life lessons,
              inspiration, romantic seduction, human nature, business, and daily
              life psychology. He has has immense psychological insight into
              human mind and shares best ways to improve one&apos;s lives.e has
              written six international bestsellers, focusing on best military
              strategies and great military leaders, world&apos;s masters, human
              nature, and earning money online.
            </p>
          </div>
          <div className={styles.right}>
            <Image
              src={img}
              alt='the author'
              className={styles.img}
              layout='responsive'
              objectFit='cover'
            />
          </div>
        </div>
        <div className={styles.content2}>
          <h2 className={styles.title}>Background:</h2>
          <p>
            Greene initially formulated some of the ideas in The 48 Laws of
            Power while working as a writer in Hollywood and concluding that
            today&apos;s power elite shared similar traits with powerful figures
            throughout history. In 1995, Greene worked as a writer at Fabrica,
            an art and media school, and met a book packager named Joost
            Elffers. Greene pitched a book about power to Elffers and six months
            later, Elffers requested that Greene write a treatment.
          </p>
          <p>
            Although Greene was quite unhappy in his job, he was comfortable and
            saw the time needed to write a proper book proposal as too risky.
            However, at the time Greene was rereading his favorite biography
            about Julius Caesar and took inspiration from Caesar&apos;s decision
            to cross the Rubicon River and fight Pompey, thus inciting the Great
            Roman Civil War. Greene wrote the treatment, which will later become
            The 48 Laws of Power. He would note this as the turning point of his
            life.
          </p>
        </div>
      </div>
    </>
  );
};
export default about;
