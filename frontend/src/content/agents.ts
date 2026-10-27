/** Agents as listed on jti.edu.au/list-agents (October 2026). */
export interface Agent {
  name: string;
  tradingName: string;
  abn: string;
  contact: string;
  email: string;
}

export const agents: Agent[] = [
  { name: "VISAPROSTUDY PTY LTD", tradingName: "VISAPROSTUDY PTY LTD", abn: "54 670 899 626", contact: "Andrea Olaya", email: "andrea.olaya@visaprostudy.com.au" },
  { name: "AECC Global", tradingName: "AECC Global", abn: "14 130 141 939", contact: "Sonu Agarwal", email: "clientrelations@aeccglobal.com" },
  { name: "AUSGATE", tradingName: "AUSGATE", abn: "20 377 433 450", contact: "Aldwin Aquino", email: "info@myausgate.com" },
  {
    name: "ATLAS EDUCATION CONSULTANCY & VISA ASSISTANCE COMPANY",
    tradingName: "ATLAS EDUCATION CONSULTANCY & VISA ASSISTANCE COMPANY",
    abn: "98 650 537 563",
    contact: "Vern John De Guzman",
    email: "atlasecva@gmail.com",
  },
];

export const agentPages = [
  { href: "/list-agents", label: "List of JTI agents" },
  { href: "/agent-application", label: "Agent application" },
];
