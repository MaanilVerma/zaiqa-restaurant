import ContentLoader from "react-content-loader";

const LoadingSkeleton = (props: any) => (
  <ContentLoader
    speed={2}
    width={200}
    height={160}
    viewBox="0 0 200 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#f2bfbf"
    {...props}
  >
    <rect x="0" y="3" rx="14" ry="14" width="203" height="163" />
    <rect x="10" y="13" rx="14" ry="14" width="203" height="163" />
  </ContentLoader>
);

export { LoadingSkeleton };
