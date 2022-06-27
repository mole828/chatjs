import { Agent } from "egg";

export default function(agent: Agent){
    agent.logger.info('agent.ts run')
}