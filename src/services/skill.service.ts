import SkillRepository from "../repositories/skill.repository";

function postSkills(name: string) {
    return SkillRepository.insertSkill(name);
}

function postJobSkills(data) {
    return SkillRepository.insertRequiredSkills(data);
}

async function getSkills() {
    const data = await SkillRepository.selectSkills();

    return data;
}

const skillService = {
    postSkills,
    postJobSkills,
    getSkills
};

export default skillService;