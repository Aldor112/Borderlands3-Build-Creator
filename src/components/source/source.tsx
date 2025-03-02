export default function SourceComponent(source: any) {
  return (
    <div className="flex flex-col">
      {source.map((source: any, index: number) => (
        <div key={index}>
          <div className="text-sm">{source.location}</div>
          <hr />
          <div className="text-xs">{source.source}</div>
          <hr />
          <div className="text-xs">{source.type}</div>
        </div>
      ))}
    </div>
  );
}
