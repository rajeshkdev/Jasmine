﻿define(['ui/screen'],
    function (screen) {
        describe("ui/screen", function () {
            it("will build display version", function () {
                var disp = screen.displayVersion;
                expect(disp).toEqual("Version: 81");
            });
        });
    });
