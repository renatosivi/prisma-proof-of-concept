var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import prisma from "../src/database.js";
function main() {
    return prisma.jobs.createMany({
        data: [
            {
                "position": "Geophysicist",
                "salary": 10000,
                "summoned": false,
                "company": "Nuvia Dynamics Inc."
            },
            {
                "position": "Tester",
                "salary": 6000,
                "summoned": false,
                "company": "IBM"
            },
            {
                "position": "Tester",
                "salary": 5000,
                "summoned": false,
                "company": "Grupo Jacto"
            },
            {
                "position": "Electrical Engineer",
                "salary": 8000,
                "summoned": false,
                "company": "Intel Corporation"
            },
            {
                "position": "Tester",
                "salary": 5000,
                "summoned": true,
                "company": "Avenue"
            },
            {
                "position": "Geophysicist",
                "salary": 10000,
                "summoned": false,
                "company": "Samsung Brasil"
            },
            {
                "position": "Tester",
                "salary": 5000,
                "summoned": false,
                "company": "Samsung Brasil"
            },
            {
                "position": "Geophysicist",
                "salary": 10000,
                "summoned": true,
                "company": "Samsung Brasil"
            },
            {
                "position": "Tester",
                "salary": 4000,
                "summoned": true,
                "company": "Samsung Brasil"
            },
            {
                "position": "Tester",
                "salary": 7000,
                "summoned": true,
                "company": "Samsung Brasil"
            },
            {
                "position": "Geophysicist",
                "salary": 10000,
                "summoned": true,
                "company": "Samsung Brasil"
            },
            {
                "position": "Front-end developer",
                "salary": 8000,
                "summoned": false,
                "company": "Google"
            },
            {
                "position": "Front-end developer",
                "salary": 8000,
                "summoned": true,
                "company": "Samsung Brasil"
            },
            {
                "position": "Back-end developer",
                "salary": 7000,
                "summoned": false,
                "company": "Mercado Livre"
            },
            {
                "position": "Back-end developer",
                "salary": 7000,
                "summoned": false,
                "company": "Mercado Livre"
            },
            {
                "position": "Back-end developer",
                "salary": 7000,
                "summoned": false,
                "company": "Mercado Livre"
            },
            {
                "position": "Full-stack developer",
                "salary": 7000,
                "summoned": false,
                "company": "Mercado Livre"
            },
            {
                "position": "Full-stack developer",
                "salary": 8000,
                "summoned": false,
                "company": "Mercado Livre"
            },
            {
                "position": "Full-stack developer",
                "salary": 9000,
                "summoned": true,
                "company": "Mercado Livre"
            }
        ]
    });
}
main()
    .then(function () { return console.log('Jobs registered.'); })["catch"](function (response) {
    console.log(response);
    process.exit(1);
})["finally"](function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, prisma.$disconnect()];
        case 1: return [2 /*return*/, _a.sent()];
    }
}); }); });
function subMain() {
    return prisma.skills.createMany({
        data: [
            { name: 'React' },
            { name: 'Docker' },
            { name: 'Vue' },
            { name: 'Angular' },
            { name: 'Python' },
            { name: 'JavaScript' },
            { name: 'PostgreSQL' },
            { name: 'MySQL' },
            { name: 'Node' },
            { name: 'CSS' },
            { name: 'MongoDB' },
            { name: 'Git' },
            { name: 'TypeScript' },
            { name: 'Prisma' },
            { name: 'Express' }
        ]
    });
}
subMain()
    .then(function () { return console.log('Skills registered.'); })["catch"](function (response) {
    console.log(response);
    process.exit(1);
})["finally"](function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, prisma.$disconnect()];
        case 1: return [2 /*return*/, _a.sent()];
    }
}); }); });
function newMain() {
    return prisma.jobs_skills.createMany({
        data: [
            {
                jobId: 1,
                skillId: 1
            },
            {
                jobId: 1,
                skillId: 2
            },
            {
                jobId: 2,
                skillId: 1
            }
        ]
    });
}
newMain()
    .then(function () { return console.log('Skills from jobs registered.'); })["catch"](function (response) {
    console.log(response);
    process.exit(1);
})["finally"](function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, prisma.$disconnect()];
        case 1: return [2 /*return*/, _a.sent()];
    }
}); }); });
