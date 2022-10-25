import Link from "next/link"
import styles from "./Pagination.module.css";

const Pagination = ({ currentPage, numPages }) => {
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = `/laws/page/${currentPage - 1}`
    const nextPage = `/laws/page/${currentPage + 1}`

    if (numPages === 1) return <></>

  return (
    <div className={styles.container}>
      <ul>
        {!isFirst && (
          <Link href={prevPage}>
            <li>Previous</li>
          </Link>
        )}

        {Array.from({length: numPages}, (_, i) => (
            <Link href={`/laws/page/${i + 1}`}>
            <li>{i + 1}</li>
            </Link>
        ))}

        {!isLast && (
          <Link href={nextPage}>
            <li>Next</li>
          </Link>
        )}
      </ul>
    </div>
  );
}
export default Pagination