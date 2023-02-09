 var tiempo = 300
        function moverA() {
            $("#a").animate({ top: "0" }, tiempo).
                animate({ top: "250px" }, tiempo).
                animate({ top: "230px" }, tiempo / 4).
                animate({ top: "250px" }, tiempo / 4)
        }
        function moverB() {
            $("#b").animate({ top: "0" }, tiempo).
                animate({ top: "250px" }, tiempo).
                animate({ top: "230px" }, tiempo / 4).
                animate({ top: "250px" }, tiempo / 4)
        }
        function moverC() {
            $("#c").animate({ top: "0" }, tiempo).
                animate({ top: "250px" }, tiempo).
                animate({ top: "230px" }, tiempo / 4).
                animate({ top: "250px" }, tiempo / 4)
        }
        function moverD() {
            $("#d").animate({ top: "0" }, tiempo).
                animate({ top: "250px" }, tiempo).
                animate({ top: "230px" }, tiempo / 4).
                animate({ top: "250px" }, tiempo / 4)
        }
        function moverE() {
            $("#e").animate({ top: "0" }, tiempo).
                animate({ top: "250px" }, tiempo).
                animate({ top: "230px" }, tiempo / 4).
                animate({ top: "250px" }, tiempo / 4)
        }

        //Primer círculo

        moverA()
        setInterval(moverA, tiempo * 2.5 * 5)

        //Segundo círculo
        function mB() {
            moverB()
            setInterval(moverB, tiempo * 2.5 * 5)
        }
        setTimeout(mB, tiempo * 2.5)
        //Tercer círculo

        function mC() {
            moverC()
            setInterval(moverC, tiempo * 2.5 * 5)
        }
        setTimeout(mC, tiempo * 2.5 * 2)

        function mD() {
            moverD()
            setInterval(moverD, tiempo * 2.5 * 5)
        }
        setTimeout(mD, tiempo * 2.5 * 3)

        function mE() {
            moverE()
            setInterval(moverE, tiempo * 2.5 * 5)
        }
        setTimeout(mE, tiempo * 2.5 * 4)
