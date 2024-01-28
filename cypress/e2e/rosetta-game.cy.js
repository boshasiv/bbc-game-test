describe('Game Tests', () => {

    const testData = {
        missionFailure: [
            { height: "1", speed: "-1" },
            { height: "1", speed: "-3" },
            { height: "2", speed: "-2" },
            { height: "2", speed: "-6" },
            { height: "3", speed: "-1" },
            { height: "3", speed: "-2" },
            { height: "3", speed: "-5" },
            { height: "4", speed: "-1" },
            { height: "4", speed: "-2" },
            { height: "4", speed: "-4" },
            { height: "5", speed: "-1" },
            { height: "5", speed: "-2" },
            { height: "5", speed: "-3" },
            { height: "5", speed: "-6" },
            { height: "6", speed: "-1" },
            { height: "6", speed: "-2" },
            { height: "6", speed: "-5" },
            { height: "6", speed: "-6" }
        ],
        partialSuccess10: [
            { height: "1", speed: "-2" },
            { height: "2", speed: "-1" },
            { height: "6", speed: "-3" }
        ],
        partialSuccess25: [
            { height: "2", speed: "-3" },
            { height: "3", speed: "-3" },
            { height: "4", speed: "-3" }
        ],
        partialSuccess50: [
            { height: "3", speed: "-6" },
            { height: "4", speed: "-5" },
            { height: "5", speed: "-4" }
        ],
        partialSuccess75: [
            { height: "1", speed: "-4" },
            { height: "1", speed: "-6" },
            { height: "2", speed: "-5" },
            { height: "3", speed: "-4" }
        ],
        missionSuccess: [
            { height: "1", speed: "-5" },
            { height: "2", speed: "-4" }
        ]
    }

    beforeEach(() => {
        cy.visit('/');
    });

    it('should verify the game starts correctly', () => {
        cy.startGame()

        cy.get('#intro')
            .contains('To avoid disaster, you must release the lander from Rosetta')
            .should('be.visible');
    });

    testData.missionFailure.forEach(setting => {
        it(`should verify rosetta failure landing with height ${setting.height} and speed ${setting.speed}`, () => {
            startGameAndVerifyRosettaLanding(setting.height, setting.speed, 'Mission failure 0%');
        });
    });

    testData.partialSuccess10.forEach(setting => {
        it(`should verify partially successful (10%) rosetta landing with height ${setting.height} and speed ${setting.speed}`, () => {
            startGameAndVerifyRosettaLanding(setting.height, setting.speed, 'Partial success 10%');
        });
    });

    testData.partialSuccess25.forEach(setting => {
        it(`should verify partially successful (25%) rosetta landing with height ${setting.height} and speed ${setting.speed}`, () => {
            startGameAndVerifyRosettaLanding(setting.height, setting.speed, 'Partial success 25%');
        });
    });

    testData.partialSuccess50.forEach(setting => {
        it(`should verify partially successful (50%) rosetta landing with height ${setting.height} and speed ${setting.speed}`, () => {
            startGameAndVerifyRosettaLanding(setting.height, setting.speed, 'Partial success 50%');
        });
    });

    testData.partialSuccess75.forEach(setting => {
        it(`should verify partially successful (75%) rosetta landing with height ${setting.height} and speed ${setting.speed}`, () => {
            startGameAndVerifyRosettaLanding(setting.height, setting.speed, 'Partial success 75%');
        });
    });

    testData.missionSuccess.forEach(setting => {
        it(`should verify rosetta successful landing with height ${setting.height} and speed ${setting.speed}`, () => {
            startGameAndVerifyRosettaLanding(setting.height, setting.speed, 'Mission success 100%');
        });
    });

    //test-related helper functions
    function startGameAndVerifyRosettaLanding(height, speed, missionMessage) {
        cy.startGame();
        cy.setSpeed(speed);
        cy.setHeight(height);
        cy.launchPhilae();
        cy.get('#mission-code')
            .contains(missionMessage, { timeout: 10000 })
            .should('be.visible')
    }
})
