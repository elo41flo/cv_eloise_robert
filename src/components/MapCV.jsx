import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function MapCV() {
  useEffect(() => {
    const map = L.map("map-cv").setView([47.59, 1.52], 11);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>',
    }).addTo(map);

    const jobs = [
      { coords: [47.713038, 1.507318], label: "ViaPoste - Mer - Intérim - Juillet 2025 <br> Rigueur <br> Réactivité" },
      { coords: [47.819071, 1.640989], label: "Marie Blachère - Messas - CDD - Avril 2025 à Juin 2025 <br> Plonge <br> Plaquage de viennoiseries" },
      { coords: [47.76688, 1.61284], label: "McDonald's - Tavers - CDI - Mars 2025 à Avril 2025 <br> Service à table <br> Plonge <br> Cuisine <br> Gestion du stress <br> Travail en équipe" },
      { coords: [47.796975, 1.523960], label: "Epicerie Multi-Services - Josnes - CDD - Septembre 2023 à Décembre 2023 <br> Décoration <br> Sens de l'organisation <br> Mise en rayon <br> Facing <br> Réception de commandes <br> Passage de commande" },
      { coords: [47.796940, 1.523925], label: "Epicerie Multi-Services - Josnes - Stage - Juillet 2022 <br> Mise en rayon <br> Gestion des archives" },
      { coords: [47.796900, 1.523900], label: "Epicerie Multi-Services - Josnes - Stage - Décembre 2021 <br> Mise en rayon <br> Commerce <br> Facing <br> Vente" },
    ];

    jobs.forEach(job =>
      L.marker(job.coords).addTo(map).bindPopup(`<b>${job.label}</b>`)
    );

    // 🟢 Nettoyage quand le composant est démonté
    return () => {
      map.remove();
    };
  }, []);

  return <div id="map-cv" style={{ height: "400px", width: "100%" }} />;
}