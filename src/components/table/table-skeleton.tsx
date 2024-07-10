const TableSkeleton = ({ rows = 10 }) => {
  return (
    <tbody>
      {Array.from({ length: rows }).map((_, index) => (
        <tr key={index}>
          <td><div className="skeleton skeleton-cell"></div></td>
          <td><div className="skeleton skeleton-cell"></div></td>
          <td><div className="skeleton skeleton-cell"></div></td>
          <td><div className="skeleton skeleton-cell"></div></td>
          <td><div className="skeleton skeleton-cell"></div></td>
          <td><div className="skeleton skeleton-cell"></div></td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableSkeleton;