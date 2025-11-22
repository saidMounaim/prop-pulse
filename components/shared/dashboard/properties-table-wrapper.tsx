import { getAgentProperties } from "@/lib/actions/property.actions";
import { AgentPropertiesTable } from "./agent-properties-table";

async function PropertiesTableWrapper() {
  const properties = await getAgentProperties();
  return <AgentPropertiesTable data={properties} />;
}

export default PropertiesTableWrapper;
