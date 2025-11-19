const [showCreate, setShowCreate] = useState(false);

<CreateBranchCard
  branches={["main", "develop", "dev"]}
  onCreate={(data) => {
    console.log("Create branch:", data);
    setShowCreate(false);
  }}
  onCancel={() => setShowCreate(false)}
/>
