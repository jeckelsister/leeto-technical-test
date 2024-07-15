const ProgressBar = ({ percentage }: { percentage: number }) => {
    return (
        <div className="flex items-center space-x-2">
            <div className="h-1.5 w-full rounded-full bg-slate-300">
                <div
                    className="h-1.5 rounded-full bg-blue"
                    style={{
                        width: `${percentage}%`
                    }}></div>
            </div>
            <p className="text-xs font-medium text-slate-800">{percentage.toFixed(0)}%</p>
        </div>
    );
};

export default ProgressBar;
