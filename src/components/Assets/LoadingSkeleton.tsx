import ContentLoader from "react-content-loader";

const LoadingSkeleton = (props: any) => (
  <ContentLoader
    speed={2}
    width={200}
    height={160}
    viewBox="0 0 200 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#e7dada"
    {...props}
  >
    <circle cx="90" cy="79" r="86" />
  </ContentLoader>
);

export { LoadingSkeleton };
