import { EnvironmentService, type ConfigSet } from './environment.service';

describe('Create method', () => {
    const configFile = '../../../data/app-settings.json';
    let service: EnvironmentService;

    beforeAll(async () => {
        service = EnvironmentService.getInstance(configFile);
    });

    it('should have defined top level environment config', () => {
        const config: ConfigSet = service.config;

        expect(config).not.toBeNull();
        expect(config.env).toBe('LOCAL');
        expect(config.projectName).toBe('Omnia Depot Web Services');
        expect(config.production).toBe(true);
        expect(config.settings).not.toBeNull();
        const settings = config.settings as ConfigSet;
        expect(settings.loggerLevel).toBe('INFO');
        expect(settings.authOptions).toBeDefined();
        const authOptions = settings.authOptions as ConfigSet;
        expect(authOptions.disableAccessTokenCheck).toBe(true);
    });

    it('should have defined web service options', () => {
        const settings = service.config.settings as ConfigSet;
        expect(settings.webServiceOptions).toBeDefined();
        const webServiceOptions = settings.webServiceOptions as ConfigSet;
        expect(webServiceOptions.baseUrl).toBe('http://localhost:3030');
        expect(webServiceOptions.port).toBe(3030);
        expect(webServiceOptions.timeout).toBe(50000);
        expect(webServiceOptions.apis).toBeDefined();
        expect(webServiceOptions.proxy).toBeDefined();
    });

    it('should have defined database options', () => {
        const settings = service.config.settings as ConfigSet;
        expect(settings.webServiceOptions).toBeDefined();
        const databaseOptions = settings.databaseOptions as ConfigSet;
        expect(databaseOptions.name).toBe('omnia-depot');
        expect(databaseOptions.schema).toBe('cps');
        expect(databaseOptions.hostEndpoint).toBe('localhost');
        expect(databaseOptions.hostPort).toBe(5432);
        expect(databaseOptions.username).toBe('masteruser');
        expect(databaseOptions.password).toBe('masterpassword');
        expect(databaseOptions.passwordEncripted).toBe(false);
    });

    it('should be able to define new env variables that are not defined in app-settings.json', () => {
        const settings = service.config.settings as ConfigSet;
        expect(settings.systemTest).toBeDefined();
        const systemTest = settings.systemTest as ConfigSet;
        expect(systemTest.skip).toBe(false);
        expect(systemTest.level).toBe('INFO');
    });
});
