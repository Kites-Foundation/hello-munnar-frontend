import React, { useCallback, useContext, useEffect, useState } from "react";
import KsrtcCard from "./KsrtcCard";
import { ApiContext } from "../../ApiContext";
import SomeErrorOccured from "../Common/SomeErrorOccured";

export default function KsrtcContainer() {
    let api = useContext(ApiContext);
    let [isLoading, setIsLoading] = useState(true);
    let [hasError, setHasError] = useState(null);
    let [ksrtcData, setKsrtcData] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let getKSRTCs = useCallback(async () => {
        setIsLoading(true);
        await api
            .get(`/ksrtcs`)
            .then((response) => {
                let { status, data } = response;
                if (status === 200) {
                    console.log(data);
                    setKsrtcData(data);
                }
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
                console.log(error);
                setHasError(error);
            });
    }, [api]);

    useEffect(() => {
        window.scrollTo(0, 0);
        getKSRTCs();
    }, [getKSRTCs]);
    return (
        <>
            {isLoading && (
                <h3 className="text-center text-black text-xl mt-12 bg-white">
                    Loading.....
                </h3>
            )}
            {!isLoading && hasError && <SomeErrorOccured />}
            {!isLoading &&
                !hasError &&
                ksrtcData &&
                ksrtcData.map((ksrtc, id) => {
                    return (
                        <KsrtcCard
                            key={ksrtc.id}
                            from={ksrtc.from}
                            to={ksrtc.to}
                            time={ksrtc.time}
                            type={ksrtc.type}
                            availableDays={ksrtc.days}
                        />
                    );
                })}
            {!isLoading && !hasError && !ksrtcData && (
                <div className="h-56 flex items-center justify-center">
                    <p>No KSRTC Data found.</p>
                </div>
            )}
        </>
    );
}
