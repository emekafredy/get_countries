export const Paragraph = ({
  title,
  data
}: {
  title: string,
  data: string
}) => {
  return (
    <p className="leading-9">
      <span className="text-m font-semibold text-dark-blue-100 dark:text-white-100">
        {title}:
      </span> {' '}
      <span className="text-m font-light text-dark-blue-100 dark:text-gray-100">
        {data}
      </span>
    </p>
  )
};
