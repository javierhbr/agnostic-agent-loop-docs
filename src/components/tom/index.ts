// Barrel export for all TOM design system components
// All exports are typed — import types alongside components where needed

export { default as SectionHeader } from './SectionHeader';
export { default as VsCard } from './VsCard';
export { default as CalloutBox } from './CalloutBox';
export { default as Badge } from './Badge';
export { default as ToolCard } from './ToolCard';
export { default as ScaleCard } from './ScaleCard';
export { default as RolesTable } from './RolesTable';
export { default as TabPanel } from './TabPanel';
export { default as PromptItem } from './PromptItem';
export { default as LayerStack } from './LayerStack';
export { default as GateCard } from './GateCard';
export { default as D1Phase } from './D1Phase';
export { default as RepoCard } from './RepoCard';
export { default as FlowStep } from './FlowStep';

// Named type re-exports for consumers
export type { AccentColor } from './Badge';
export type { CalloutType } from './CalloutBox';
export type { ToolCardAccent } from './ToolCard';
export type { ScaleStage } from './ScaleCard';
export type { Tab } from './TabPanel';
export type { PromptBadgeType } from './PromptItem';
export type { RoleRow } from './RolesTable';
export type { RepoAccent } from './RepoCard';
export type { Layer, LayerPill, PillType, LayerBg } from './LayerStack';
export type { RoleAccent } from './FlowStep';
